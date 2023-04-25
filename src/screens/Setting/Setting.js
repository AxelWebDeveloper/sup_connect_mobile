import {React} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-screens';
import CustomInput from '../../components/CustomInput/CustomInput';

const Setting = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.box}>
        <View style={styles.oval} />
      </View>
      <View style={styles.titleDiv}>
        <Text style={styles.titlePage}> Paramètres </Text>
      </View>
      <View style={styles.settingCompte}>
        <Text style={styles.titleCompte}> Compte </Text>
        <View style={styles.settingButton}>
          <Text style={styles.titleButton}> Informations de l'école </Text>
          <View style={styles.iconView}>
            <Text style={styles.iconButton1}>dd</Text>
          </View>
        </View>
        <View style={styles.settingButton}>
          <Text style={styles.titleButton}> Notifications </Text>
          <View style={styles.iconView}>
            <Text style={styles.iconButton2}>dd</Text>
          </View>
        </View>
        <View style={styles.settingButton}>
          <Text style={styles.titleButton}> Confidentialité </Text>
          <View style={styles.iconView}>
            <Text style={styles.iconButton3}>dd</Text>
          </View>
        </View>
      </View>
      <View style={styles.settingGeneral}>
        <Text style={styles.titleCompte}> Général </Text>
        <View style={styles.settingButton}>
          <Text style={styles.titleButton}> Sécurité </Text>
          <View style={styles.iconView}>
            <Text style={styles.iconButton4}>dd</Text>
          </View>
        </View>
        <View style={styles.settingButton}>
          <Text style={styles.titleButton}> À propos </Text>
          <View style={styles.iconView}>
            <Text style={styles.iconButton5}>ddd</Text>
          </View>
        </View>
        <View style={styles.settingButton}>
          <Text style={styles.titleButton}> Aide </Text>
          <View style={styles.iconView}>
            <Text style={styles.iconButton6}>ddd</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  oval: {
    width: 450,
    height: 150,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'rgba(169, 163, 237, 1)',
  },
  titleDiv: {
    width: 160,
    height: 50,
    borderRadius: 20,
    marginTop: -25,
    shadowColor: '#000001',
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlePage: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  settingCompte: {
    marginTop: 40,
    marginLeft: 30,
  },
  settingGeneral: {
    marginTop: 25,
    marginLeft: 30,
  },
  titleCompte: {
    fontSize: 19,
    fontWeight: '400',
  },
  settingButton: {
    marginTop: 15,
    width: 330,
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(216, 216, 216, 1)',
    backgroundColor: 'rgba(236, 236, 236, 1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleButton: {
    marginLeft: 30,
  },
  iconButton1: {
    marginLeft: 105,
  },
  iconButton2: {
    marginLeft: 170,
  },
  iconButton3: {
    marginLeft: 158,
  },
  iconButton4: {
    marginLeft: 197,
  },
  iconButton5: {
    marginLeft: 190,
  },
  iconButton6: {
    marginLeft: 219,
  },
});

export default Setting;
