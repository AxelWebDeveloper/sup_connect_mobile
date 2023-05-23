import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, StackActions} from '@react-navigation/native';

const TouchableNotes = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Note');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.circleIcon,
          {backgroundColor: 'rgba(169, 193, 255, 0.43)'},
        ]}>
        <MaterialCommunityIcons
          size={23}
          name="note-multiple-outline"
          style={{color: '#7299FE'}}
        />
      </View>
      <Text style={styles.menuTitle}>Notes</Text>
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

export default TouchableNotes;
