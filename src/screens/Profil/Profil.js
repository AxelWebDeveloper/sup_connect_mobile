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

const dateProfil = [
  {
    id: 'bd7acbdddea-c1b1-46c2-aed5-3ad53dadafzefabb28ba',
    IoniconProfil: (
      <Ionicons name="information-circle-outline" size={30} color="#EAAA6F" />
    ),
    textProfil: 'Informations',
    IoniconProfil2: <Ionicons name="chevron-forward" size={30} color="grey" />,
  },
  {
    id: '3ac68afffzefzeffc-c6eadddzeza05-48ddazdz3-a4f8-fbd91aa97f63',
    IoniconProfil: <AntDesign name="notification" size={29} color="#EAAA6F" />,
    textProfil: 'Absences',
    IoniconProfil2: <Ionicons name="chevron-forward" size={30} color="grey" />,
  },
  {
    id: 'fff-c1b1-46cfzeazeazdazdaeaefe2-aed5-3ad53abb28ba',
    IoniconProfil: <Ionicons name="time-outline" size={30} color="#EAAA6F" />,
    textProfil: 'Retards',
    IoniconProfil2: <Ionicons name="chevron-forward" size={30} color="grey" />,
  },
  {
    id: 'bd7acbea-qsd-4dazd6c2-aed5-3addzad53abb2fezfeeazeazez8ba',
    IoniconProfil: (
      <Ionicons name="md-exit-outline" size={30} color="#EAAA6F" />
    ),
    textProfil: 'Déconnexion',
    IoniconProfil2: <Ionicons name="chevron-forward" size={30} color="grey" />,
  },
];

const Item = ({item}) => (
  <View style={styles.cardProfil1}>
    <View style={styles.textProfil}>
      <View style={styles.CardLogo}>{item.IoniconProfil}</View>
      <Text style={styles.tileCardProfil}> {item.textProfil} </Text>
      <View style={styles.arrowProfil}>{item.IoniconProfil2}</View>
    </View>
  </View>
);

const Account = () => {
  return (
    <>
      {
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
            <FlatList
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              scrollEnabled={false}
              data={dateProfil}
              renderItem={({item}) => <Item item={item} />}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </SafeAreaView>
      }
    </>
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
    minHeight:1000,
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

export default Account;
