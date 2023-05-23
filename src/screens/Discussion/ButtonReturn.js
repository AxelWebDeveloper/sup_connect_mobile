import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Return = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Message');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Ionicons
        style={styles.iconBack}
        name="arrow-back"
        size={30}
        color="#33363F"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  iconBack: {
    marginLeft: 22,
    marginRight: 25,
    width: 25,
    height: 25,
  },
});
export default Return;
