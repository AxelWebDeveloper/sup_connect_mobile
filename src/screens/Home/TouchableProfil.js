import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, StackActions} from '@react-navigation/native';

const TouchableProfil = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Profil2');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.circleIcon,
          {backgroundColor: 'rgba(234, 170, 111, 0.43)'},
        ]}>
        <FontAwesome5 size={23} name="user" style={{color: '#EBB079'}} />
      </View>
      <Text style={styles.menuTitle}>Profil</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleIcon: {
    width: 60,
    height: 60,
    borderRadius: 80 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    textAlign: 'center',
    color: '#AAAAAA',
    marginTop: 10,
  },
});

export default TouchableProfil;
