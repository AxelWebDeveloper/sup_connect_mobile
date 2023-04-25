import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Setting from '../../screens/Setting/Setting';
import CompleteNewPassword from '../../screens/CompleteNewPassword/CompleteNewPassword';
import Home from '../../screens/Home/Home';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="CompleteNewPassword"
        component={CompleteNewPassword}
      />
      <Stack.Screen name="Settings" component={Setting} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
