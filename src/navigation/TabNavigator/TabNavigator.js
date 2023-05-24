import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../../screens/Login/Login';
import Home from '../../screens/Home/Home';
import Profil from '../../screens/Profil/Profil';
import Profil2 from '../../screens/Profil/Profil2';
import Message from '../../screens/Message/Message';
import Discussion from '../../screens/Discussion/Discussion';
import Planning from '../../screens/Planning/Planning';
import Note from '../../screens/Note/Note';
import Setting from '../../screens/Setting/Setting';
import Absence from "../../screens/Profil/Absence";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" color={'#CBB0E0'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="ios-chatbubbles-outline"
              color={'#A9C1FF'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discussion"
        component={Discussion}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-chatbox-ellipses" color={'#A9C1FF'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Planning"
        component={Planning}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-calendar" color={'#FFA9A9'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Note"
        component={Note}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-school" color={'#EAC59A'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil2"
        component={Profil2}
        options={{
          tabBarIcon: () => (
            <AntDesign name="user" color={'#EAC59A'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <AntDesign name="pluscircle" color={'#9896F4'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
