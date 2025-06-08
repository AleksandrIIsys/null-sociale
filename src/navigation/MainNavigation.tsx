import React, { useCallback } from 'react';
import { MainStackParamList } from '@/navigation/types.ts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Paths } from '@/navigation/paths.ts';
import { Home, Messenger, Profile, Publish } from '@/screens';
import { Icon } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator<MainStackParamList>();


function MainNavigation() {
  const tabBarBackground = useCallback(() => <View style={[StyleSheet.absoluteFill, { backgroundColor: "#262626"}]} />, [])
  return (
    <Tab.Navigator initialRouteName={Paths.Profile} screenOptions={{ headerShown: false, tabBarBackground, tabBarStyle: {height: 64, paddingTop: 8} }}>
      <Tab.Screen
        component={Home}
        name={Paths.Home}
        navigationKey={Paths.Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              color="#fff"
              size={32}
              source={focused ? 'home' : 'home-outline'}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        component={Publish}
        name={Paths.Publish}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Icon
              color="#fff"
              size={32}
              source={focused ? 'plus-box' : 'plus-box-outline'}
            />
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        component={Messenger}
        name={Paths.Messenger}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              color="#fff"
              size={32}
              source={focused ? 'chat' : 'chat-outline'}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
        <Tab.Screen
          component={Profile}
          name={Paths.Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                color="#fff"
                size={32}
                source={focused ? 'account' : 'account-outline'}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
    </Tab.Navigator>
  );
}

export default MainNavigation;