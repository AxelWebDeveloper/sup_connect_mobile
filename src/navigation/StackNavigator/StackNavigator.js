import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Note from '../../screens/Note/Note';
import Planning from'../../screens/Planning/Planning';
import Home from '../../screens/Home/Home';
import Profil from '../../screens/Profil/Profil'
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Note" component={Profil} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
