import { Paths } from "@/navigation/paths";
import { RootScreenProps } from "@/navigation/types";
import { useState } from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import { Button, TextInput } from "react-native-paper";
import DatePicker from 'react-native-date-picker'
import {IRegisterForm, useRegisterForm} from "./validator";
import { Controller } from 'react-hook-form';
import {InputFormWrapper} from "@/components/molecules";
import {
    createUserWithEmailAndPassword,
    getAuth,
} from '@react-native-firebase/auth';
import { doc, getFirestore, setDoc } from '@react-native-firebase/firestore';
import {useStoreDispatch} from "@/hooks";
import {setUser} from "@/store/reducers/user";


type ActiveFragmentType = 'first' | 'second'

function Register({navigation}: RootScreenProps<Paths.Register>) {
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const dispatch = useStoreDispatch();
    const {
        control,
        formState: { dirtyFields, errors, isValid },
        handleSubmit,
    } = useRegisterForm({
        age: null,
        city: '',
        confirmPassword: '',
        country: '',
        email: '',
        fullname: '',
        password: '',
        username: ''
    })
    const [activeFragment, setActiveFragment] = useState<ActiveFragmentType>('first')
    const handleBackButton = () => {
        switch(activeFragment){
            case "second": {
                setActiveFragment('first')
                setError('')
                break;
            }
            default: {
                navigation.goBack();
            }
        }
    }
    
    const handleContinueButton = ()=>{
        const { fullname, username } = dirtyFields;
        const { fullname: fullnameError, username: usernameError } = errors;
        if((fullname && !fullnameError) && (username && !usernameError)){
            setActiveFragment('second')
        }
    }

  const onSubmit = ({ age, confirmPassword, email, password, ...other }:IRegisterForm) => {
        confirmPassword.at(0);
        createUserWithEmailAndPassword(getAuth(), email, password)
          .then(async () => {
              const { uid } = getAuth().currentUser ?? { uid: ''}
              const user = {age: age?.toString() ?? '', ...other}
              dispatch(setUser({user}))
              const database = getFirestore();
              try {
                  await setDoc(doc(database, 'users', uid), {
                  ...user
                });
              } catch (error) {
                console.error('Error adding document:', error);
              }
            })
          .catch((error: unknown) => {

              if (error instanceof Error) {
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
                          setError('Ошибка сети')
                      }
                  }

              }
          });
    }
    return (
      <View style={{ flex: 1, marginHorizontal: 24, position: 'relative' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20,
            position: 'relative',
          }}>
          <TouchableOpacity
            onPress={handleBackButton}
            style={{ left: 0, marginTop: 12, position: 'absolute' }}>
            <Text style={{ fontSize: 16, fontWeight: 900 }}>Назад</Text>
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', fontSize: 24 }}>Регистрация</Text>
        </View>
        <View style={{ gap: 8 }}>
          {activeFragment === 'first' && (
            <View>
              <Controller
                control={control}
                name="username"
                render={({ field, fieldState: { error, isTouched } }) => (
                  <InputFormWrapper
                    error={error}
                    isTouched={isTouched}
                    label="Логин"
                    mode="outlined"
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
                    mode="outlined"
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
                      <TextInput
                        editable={false}
                        label="Дата рождения"
                        mode="outlined"
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
                    mode="outlined"
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
                    mode="outlined"
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
                    mode="outlined"
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
          {error ?? <Text style={{color: 'red', fontSize: 14}}>{error}</Text>}
        </View>
        <View style={{ bottom: 24, position: 'absolute', width: '100%' }}>
          <Button
            disabled={activeFragment === 'second' && !isValid}
            mode="contained-tonal"
            onPress={
              activeFragment === 'second'
                ? handleSubmit(onSubmit)
                : handleContinueButton
            }
            style={{ borderRadius: 4, bottom: 24 }}>
            Далее
          </Button>
        </View>
      </View>
    );
}
export default Register;