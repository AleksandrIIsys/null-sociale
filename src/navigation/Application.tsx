import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';

import { Login, Profile, Register, Splash } from '@/screens';
import { useTheme } from '@/theme';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={navigationTheme} >
          <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Splash} name={Paths.Splash} />
            <Stack.Screen component={Login} name={Paths.Login} />
            <Stack.Screen component={Register} name={Paths.Register} />
            <Stack.Screen component={Profile} name={Paths.Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
