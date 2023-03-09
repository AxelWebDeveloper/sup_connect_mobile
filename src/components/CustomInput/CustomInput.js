import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './CustomInput.styled';

const CustomInput = ({onChangeText, value, label, secure, style}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default CustomInput;
