import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TouchableCalendar = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Planning');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.circleIcon,
          {backgroundColor: 'rgba(243, 169, 255, 0.43)'},
        ]}>
        <AntDesign size={25} name="calendar" style={{color: '#C973D7'}} />
      </View>
      <Text style={styles.menuTitle}>Calendrier</Text>
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

export default TouchableCalendar;
