import React from 'react';
import { Login, Register } from '@/screens';
import { Paths } from '@/navigation/paths.ts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/types.ts';

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthenticationNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name={Paths.Login} />
      <Stack.Screen component={Register} name={Paths.Register} />
    </Stack.Navigator>
  );
}

export default AuthenticationNavigation;