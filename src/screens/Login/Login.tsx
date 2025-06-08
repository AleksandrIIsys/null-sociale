import { Paths } from '@/navigation/paths';
import { AuthScreenProps } from '@/navigation/types';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ILoginForm, useLoginForm } from '@/screens/Login/validator.ts';
import { InputFormWrapper } from '@/components/molecules';
import { Controller } from 'react-hook-form';
import {
  getAuth,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';
import { LoadingFullScreen } from '@/components/templates';
import { useState } from 'react';
import { StackActions } from '@react-navigation/native';
import { styles } from '@/screens/Login/styles.ts';

class FirebaseError {
  code: string;

  constructor(code: string) {
    this.code = code;
  }
}

function Login({ navigation }: AuthScreenProps<Paths.Login>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useLoginForm({
    email: '',
    password: '',
  });
  const handleRegistrationButton = () => {
    navigation.navigate(Paths.Register);
  };
  const onSubmit = ({ email, password }: ILoginForm) => {
    setLoading(true);
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        setLoading(false);
        navigation.dispatch(StackActions.replace(Paths.Main));
      })
      .catch((error: unknown) => {
        setLoading(false);
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case 'auth/invalid-credential': {
              setError('Неверные данные');
              break;
            }
            default: {
              setError('Ошибка сети');
            }
          }
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ gap: 8 }}>
        <Text style={styles.titleText}>Авторизация</Text>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error, isTouched } }) => (
            <InputFormWrapper
              error={error}
              isTouched={isTouched}
              label="Почта"
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
              {...field}
            />
          )}
        />

        <Text style={{ color: 'red', fontSize: 14 }}>{error ?? ''}</Text>
        <Button
          contentStyle={{
            backgroundColor: '#fff',
          }}
          disabled={!isValid}
          labelStyle={{ fontWeight: 900 }}
          mode="contained-tonal"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          textColor="#000">
          Войти
        </Button>
      </View>
      <TouchableOpacity
        onPress={handleRegistrationButton}
        style={{
          bottom: 0,
          marginBottom: 24,
          position: 'absolute',
          width: '100%',
        }}>
        <Text style={[styles.baseText, styles.bottomText]}>
          У вас ещё нет учетной записи?
        </Text>
      </TouchableOpacity>
      <LoadingFullScreen loading={loading} />
    </SafeAreaView>
  );
}

export default Login;
