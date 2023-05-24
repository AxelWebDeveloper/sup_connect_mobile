import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TouchableAbsence = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Absence');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.cardProfil1}>
        <View style={styles.textProfil}>
          <View style={styles.CardLogo}>
            <AntDesign name="notification" size={29} color="#EAAA6F" />
          </View>
          <Text style={styles.tileCardProfil}>Absence</Text>
          <View style={styles.arrowProfil}>
            <Ionicons name="chevron-forward" size={30} color="grey" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardProfil1: {
    width: 350,
    height: 80,
    backgroundColor: 'rgba(234, 170, 111, 0.2)',
    borderRadius: 15,
    marginTop: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textProfil: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  CardLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 15,
    backgroundColor: 'rgba(234, 170, 111, 0.25)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  tileCardProfil: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 17,
    marginLeft: 20,
    marginRight: 50,
  },

  arrowProfil: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 20,
  },
});

export default TouchableAbsence;
