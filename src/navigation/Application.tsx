import type { RootStackParamList } from '@/navigation/types';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';

import { Splash } from '@/screens';
import { useTheme } from '@/theme';
import AuthenticationNavigation from '@/navigation/AuthenticationNavigation.tsx';
import MainNavigation from '@/navigation/MainNavigation.tsx';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1A1A1A',
    text: '#fff',
    border: '#1A1A1A'
  }
}

function ApplicationNavigator() {
  const { variant } = useTheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={Theme} >
          <StatusBar
            animated
            backgroundColor="#1A1A1A"
            barStyle="dark-content"
            translucent
          />
          <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Splash} name={Paths.Splash} />
            <Stack.Screen component={AuthenticationNavigation} name={Paths.Authentication} />
            <Stack.Screen component={MainNavigation} name={Paths.Main} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
