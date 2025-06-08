import { Paths } from '@/navigation/paths';
import { AuthScreenProps } from '@/navigation/types';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { IRegisterForm, useRegisterForm } from './validator';
import { Controller } from 'react-hook-form';
import { InputFormWrapper } from '@/components/molecules';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';
import { doc, getFirestore, setDoc } from '@react-native-firebase/firestore';
import { useStoreDispatch } from '@/hooks';
import { setUser } from '@/store/reducers/user';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import { Icon } from 'react-native-paper';
import { BaseInput } from '@/components/atoms';
import { StackActions } from '@react-navigation/native';
import { LoadingFullScreen } from '@/components/templates';

type ActiveFragmentType = 'first' | 'second';

class FirebaseError {
  code: string;
  constructor(code: string) {
    this.code = code;
  }
}

function Register({ navigation }: AuthScreenProps<Paths.Register>) {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useStoreDispatch();
  const [image, setImage] = useState<Asset | undefined>(undefined);
  const {
    control,
    formState: { dirtyFields, errors },
    handleSubmit,
  } = useRegisterForm({
    age: null,
    city: '',
    confirmPassword: '',
    country: '',
    email: '',
    fullname: '',
    password: '',
    username: '',
  });
  const [activeFragment, setActiveFragment] =
    useState<ActiveFragmentType>('first');
  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleContinueButton = () => {
    const { fullname, username } = dirtyFields;
    const { fullname: fullnameError, username: usernameError } = errors;
    if (fullname && !fullnameError && username && !usernameError) {
      setActiveFragment('second');
    }
  };
  const handleBackButtonFragment = () => {
    setActiveFragment('first');
    setError('');
  };
  const onSubmit = ({
    age,
    confirmPassword,
    email,
    password,
    ...other
  }: IRegisterForm) => {
    confirmPassword.at(0);
    setLoading(true);
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(async () => {
        const { uid } = getAuth().currentUser ?? { uid: '' };
        const user = { age: age?.toString() ?? '', ...other };
        dispatch(setUser({ user }));
        navigation.dispatch(StackActions.replace(Paths.Main));
        const database = getFirestore();
        try {
          await setDoc(doc(database, 'users', uid), {
            ...user,
          });
        } catch (error) {
          console.error('Error adding document:', error);
        }
        setLoading(false);
      })
      .catch((error: unknown) => {
        setLoading(false);
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case 'auth/email-already-in-use': {
              setError('Почта уже используется');
              break;
            }
            case 'auth/invalid-email': {
              setError('Почта введена не правильно');
              break;
            }
            default: {
              setError('Ошибка сети');
            }
          }
        }
      });
  };
  const handleOpenImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 2000,
      maxWidth: 2000,
      mediaType: 'photo',
    });
    setImage(result.assets?.[0]);
  };
  return (
    <View style={{ flex: 1, marginHorizontal: 24, position: 'relative' }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <TouchableOpacity onPress={handleBackButton} style={{ flex: 1 }}>
          <Icon color="white" size={28} source="arrow-left" />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            flex: 2,
            fontSize: 24,
            fontWeight: 900,
            textAlign: 'center',
          }}>
          Регистрация
        </Text>
        <View style={{ flex: 1 }} />
      </View>
      <View style={{ flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <Text style={{ color: '#fff', textAlign: 'right' }}>
          {activeFragment === 'second' ? 2 : 1}/2
        </Text>
        <ProgressBar
          animatedValue={activeFragment === 'second' ? 1 : 0.5}
          color="#fff"
          style={{
            backgroundColor: '#888888',
            borderColor: '#fff',
            borderRadius: 8,
            borderWidth: 1,
            height: 12,
          }}
        />
      </View>
      <View style={{ gap: 8 }}>
        {activeFragment === 'first' && (
          <View style={{ gap: 12 }}>
            <View
              style={{
                alignSelf: 'center',
                backgroundColor: '#484747',
                borderColor: '#fff',
                borderRadius: 100,
                borderWidth: 1,
                height: 100,
                justifyContent: 'center',
                padding: 8,
                width: 100,
              }}>
              {image?.uri ? (
                <FastImage
                  source={{ uri: image.uri }}
                  style={{
                    alignSelf: 'center',
                    borderColor: '#b6b6b6',
                    borderRadius: 100,
                    borderWidth: 1,
                    height: 100,
                    width: 100,
                  }}
                />
              ) : (
                <Text style={{ textAlign: 'center' }}>
                  <Icon color="#fff" size={68} source="account-circle" />
                </Text>
              )}
            </View>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Загрузите аватар (необязательно)
            </Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={handleOpenImage}
                style={{
                  backgroundColor: '#727272',
                  borderRadius: 24,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 900,
                    textAlign: 'center',
                  }}>
                  Выберите файл
                </Text>
              </TouchableOpacity>
              <Text style={{ color: 'white' }}>
                {image ? 'Файл выбран' : 'Файл не выбран'}
              </Text>
            </View>
            <Controller
              control={control}
              name="username"
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputFormWrapper
                  error={error}
                  isTouched={isTouched}
                  label="Логин"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="fullname"
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputFormWrapper
                  error={error}
                  isTouched={isTouched}
                  label="Имя Фамилия"
                  {...field}
                />
              )}
            />
          </View>
        )}
        {activeFragment === 'second' && (
          <View>
            <Controller
              control={control}
              name="age"
              render={({ field: { onChange, value } }) => (
                <>
                  <DatePicker
                    date={value ?? new Date()}
                    maximumDate={new Date()}
                    modal
                    mode="date"
                    onCancel={() => {
                      setOpen(false);
                    }}
                    onConfirm={date => {
                      setOpen(false);
                      onChange(date);
                    }}
                    open={open}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setOpen(true);
                    }}>
                    <BaseInput
                      editable={false}
                      label="Дата рождения"
                      value={value?.toLocaleDateString('ru-RU') ?? ''}
                    />
                  </TouchableOpacity>
                </>
              )}
            />
            <Controller
              control={control}
              name="country"
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputFormWrapper
                  error={error}
                  isTouched={isTouched}
                  label="Страна"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="city"
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputFormWrapper
                  error={error}
                  isTouched={isTouched}
                  label="Город"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputFormWrapper
                  error={error}
                  isTouched={isTouched}
                  label="Email"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputFormWrapper
                  error={error}
                  isTouched={isTouched}
                  label="Пароль"
                  type="password"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field, fieldState: { error, isTouched } }) => (
                <InputFormWrapper
                  error={error}
                  isTouched={isTouched}
                  label="Подтверждение пароля"
                  type="password"
                  {...field}
                />
              )}
            />
          </View>
        )}
        {error ?? <Text style={{ color: 'red', fontSize: 14 }}>{error}</Text>}
      </View>
      <View
        style={{
          bottom: 24,
          flexDirection: 'row',
          gap: 12,
          position: 'absolute',
          width: '100%',
        }}>
        {activeFragment === 'second' && (
          <Button
            contentStyle={{
              backgroundColor: '#3d3d3d',
            }}
            labelStyle={{ fontWeight: 900 }}
            mode="contained-tonal"
            onPress={handleBackButtonFragment}
            style={{
              borderRadius: 12,
              bottom: 24,
              flex: 1,
            }}
            textColor="#fff">
            Назад
          </Button>
        )}

        <Button
          contentStyle={{
            backgroundColor: '#fff',
          }}
          labelStyle={{ fontSize: 16, fontWeight: 900 }}
          mode="contained-tonal"
          onPress={
            activeFragment === 'second'
              ? handleSubmit(onSubmit)
              : handleContinueButton
          }
          style={{ borderRadius: 12, bottom: 24, flex: 1 }}
          textColor="#000">
          Продолжить
        </Button>
        <LoadingFullScreen loading={loading} />
      </View>
    </View>
  );
}

export default Register;
