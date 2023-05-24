import {React} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TouchableAbsence from './TouchableAbsence';
import TouchableRetard from './TouchableRetard';

const Profil = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.buttonModifier}>
        <Text style={styles.textModifier}>Modifier le profil</Text>
      </Button>
      <View style={styles.viewProfil}>
        <Image
          style={styles.imageProfil}
          source={require('../../assets/profil2.png')}
        />
        <Text style={styles.nameProfil}> LING LONG </Text>
        <Text style={styles.classProfil}> L3 Paris </Text>
      </View>
      <ScrollView style={styles.infosProfil}>
        <View style={styles.cardProfil1}>
          <View style={styles.textProfil}>
            <View style={styles.CardLogo}>
              <Ionicons
                name="information-circle-outline"
                size={30}
                color="#EAAA6F"
              />
            </View>
            <Text style={styles.tileCardProfil}> Informations </Text>
            <View style={styles.arrowProfil}>
              <Ionicons name="chevron-forward" size={30} color="grey" />
            </View>
          </View>
        </View>

        <TouchableAbsence />

        <TouchableRetard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(234, 170, 111, 0.8)',
  },

  buttonModifier: {
    backgroundColor: 'rgba(234, 170, 111, 0.95)',
    borderRadius: 10,
    width: 190,
    marginRight: 15,
    marginTop: 15,

    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },

  textModifier: {
    color: '#FFF',
    fontSize: 14,
  },

  viewProfil: {
    justifyContent: 'center',
    alignSelf: 'center',
  },

  imageProfil: {
    marginTop: 50,
    borderRadius: 75,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  nameProfil: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: '#FFF',
    marginTop: 10,
  },

  classProfil: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 17,
    color: '#FFF',
  },

  infosProfil: {
    backgroundColor: '#FFF',
    borderRadius: 40,
    marginTop: 25,
    minHeight: 1000,
  },

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

export default Profil;
