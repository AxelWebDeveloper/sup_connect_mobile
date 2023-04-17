import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Note from '../../screens/Note/Note';
import Planning from'../../screens/Planning/Planning';
import Home from '../../screens/Home/Home';
import Profil from '../../screens/Profil/Profil'
import Setting from '../../screens/Setting/Setting';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Settings" component={Setting} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
