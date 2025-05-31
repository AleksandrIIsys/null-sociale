import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';

import { Example, Startup } from '@/screens';
import Splash from '@/screens/Splash/Splash';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {

  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Splash} name={Paths.Spalsh} />
          <Stack.Screen component={Startup} name={Paths.Startup} />
          <Stack.Screen component={Example} name={Paths.Example} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
