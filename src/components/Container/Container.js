import React from 'react';
import styles from './Container.styled';
import {View} from 'react-native';

const Container = ({style, children}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;
