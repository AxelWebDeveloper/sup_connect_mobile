import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../../screens/Login/Login';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      initialRouteName={'Home'}>
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
