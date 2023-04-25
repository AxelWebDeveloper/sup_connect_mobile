import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Note from '../../screens/Note/Note';
import Planning from'../../screens/Planning/Planning';
import Home from '../../screens/Home/Home';
import Profil from '../../screens/Profil/Profil';
import Setting from '../../screens/Setting/Setting';
import Message from '../../screens/Message/Message';
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
      <Stack.Screen name="Settings" component={Setting} />
      <Stack.Screen name="Note" component={Planning} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
