import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Home from '../../screens/Home/Home';
import Profil from '../../screens/Profil/Profil';
import Message from '../../screens/Message/Message';
import Planning from '../../screens/Planning/Planning';
import Note from '../../screens/Note/Note';
import CompleteNewPassword from '../../screens/CompleteNewPassword/CompleteNewPassword';
import Setting from '../../screens/Setting/Setting';
import Discussion from '../../screens/Discussion/Discussion';
import TabNavigator from '../TabNavigator/TabNavigator';
import Absence from '../../screens/Profil/Absence';
import Retard from '../../screens/Profil/Retard';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Discussion" component={Discussion} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen name="Planning" component={Planning} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Absence" component={Absence} />
      <Stack.Screen name="Retard" component={Retard} />
      <Stack.Screen
        name="CompleteNewPassword"
        component={CompleteNewPassword}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
