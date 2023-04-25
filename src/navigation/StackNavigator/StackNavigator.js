import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Home from '../../screens/Home/Home';
import CompleteNewPassword from '../../screens/CompleteNewPassword/CompleteNewPassword';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen
        name="CompleteNewPassword"
        component={CompleteNewPassword}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
