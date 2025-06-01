import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';

import { Example, Login, Register, Startup, Splash } from '@/screens';
import { useTheme } from '@/theme';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme} >
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Splash} name={Paths.Spalsh} />
          <Stack.Screen component={Login} name={Paths.Login} />
          <Stack.Screen component={Register} name={Paths.Register} />
          <Stack.Screen component={Startup} name={Paths.Startup} />
          <Stack.Screen component={Example} name={Paths.Example} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
