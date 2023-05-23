import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, StackActions} from '@react-navigation/native';

const TouchableMessage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Message');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.circleIcon,
          {backgroundColor: 'rgba(255, 169, 169, 0.43)'},
        ]}>
        <MaterialIcons size={25} name="message" style={{color: '#E37878'}} />
      </View>
      <Text style={styles.menuTitle}>Message</Text>
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

export default TouchableMessage;
