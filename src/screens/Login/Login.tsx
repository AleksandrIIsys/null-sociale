import { Paths } from "@/navigation/paths";
import { RootScreenProps } from "@/navigation/types";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ILoginForm, useLoginForm } from '@/screens/Login/validator.ts';
import { InputFormWrapper } from '@/components/molecules';
import { Controller } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { LoadingFullScreen } from '@/components/templates';
import { useState } from 'react';

function Login({ navigation }: RootScreenProps<Paths.Login>) {

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
    const handleRegistrationButton =  () => {
        navigation.navigate(Paths.Register)
    }
    const onSubmit = ({email, password}:ILoginForm) => {
      setLoading(true);
      signInWithEmailAndPassword(getAuth(), email, password).then(() => {
        setLoading(false);
      }).catch((error: unknown) => {
        setLoading(false);
        switch (error.code) {
          case 'auth/invalid-credential': {
            setError('Неверные данные');
            break;
          }
          default: {
            setError('Ошибка сети')
          }
        }
      })
    }
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', marginHorizontal: 32 }}>
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 32, marginBottom: 20, textAlign: 'center' }}>
            Авторизация
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error, isTouched } }) => (
              <InputFormWrapper
                error={error}
                isTouched={isTouched}
                label="Почта"
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
                mode="outlined"
                {...field}
              />
            )}
          />

          <Text style={{ color: 'red', fontSize: 14 }}>{error ?? ''}</Text>
          <Button
            disabled={!isValid}
            mode="contained-tonal"
            onPress={handleSubmit(onSubmit)}
            style={{ borderRadius: 4, marginTop: 20 }}>
            Войти
          </Button>
        </View>
        <Text style={{ fontSize: 16, marginVertical: 12, textAlign: 'center' }}>
          или
        </Text>
        <View>
          <Button
            mode="contained-tonal"
            onPress={handleRegistrationButton}
            style={{ borderRadius: 4 }}>
            Регистрация
          </Button>
        </View>
        <LoadingFullScreen loading={loading} />
      </SafeAreaView>
    );
}
export default Login;