import {React} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    subject: 'Mathématiques',
    date: '19 novembre',
    separation: '|',
    moyenne: '15,00/20',
    note: '19,00/20',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    subject: 'Second Item',
    date: '19 novembre',
    separation: '|',
    moyenne: '15,00/20',
    note: '19,00/20',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    subject: 'Third Item',
    date: '19 novembre',
    separation: '|',
    moyenne: '15,00/20',
    note: '19,00/20',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    subject: 'Third Item',
    date: '19 novembre',
    separation: '|',
    moyenne: '15,00/20',
    note: '19,00/20',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    subject: 'Third Item',
    date: '19 novembre',
    separation: '|',
    moyenne: '15,00/20',
    note: '19,00/20',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    subject: 'Third Item',
    date: '19 novembre',
    separation: '|',
    moyenne: '15,00/20',
    note: '19,00/20',
  },
];

const Item = ({item}) => (
  <View style={styles.cardNote}>
    <View style={styles.hrPetit} />
    <Text style={styles.subject}>{item.subject}</Text>
    <View style={styles.bottomNote}>
      <Text style={styles.date}> {item.date} </Text>
      <Text style={styles.separation}> {item.separation} </Text>
      <Text style={styles.moyenne}>Moy. class : {item.moyenne} </Text>
      <Text style={styles.note}> {item.note} </Text>
    </View>
    <View style={styles.hrGrand} />
  </View>
);

const Note = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.box}>
        <View style={styles.oval} />
      </View>
      <View style={styles.titleDiv}>
        <Text style={styles.titlePage}> Bulletin </Text>
      </View>

      <View style={styles.carousel}>
        <Text style={styles.years}> Première année </Text>
        <Text style={styles.trimestre}> Premier trimestre </Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
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
    backgroundColor: '#7299FE',
  },
  hr1: {
    width: 380,
    borderColor: '#BBBBBB',
    border: 1,
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
  carousel: {
    alignItems: 'center',
  },
  years: {
    marginTop: 30,
    fontSize: 19,
    fontWeight: '600',
  },
  trimestre: {
    marginTop: 30,
    marginBottom: 45,
    fontSize: 19,
    fontWeight: '600',
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
  cardNote: {
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  oval: {
    width: 450,
    height: 140,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: '#7299FE',
  },
  hr1: {
    width: 380,
    borderColor: '#BBBBBB',
    border: 1,
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
  carousel: {
    alignItems: 'center',
  },
  years: {
    marginTop: 30,
    fontSize: 19,
    fontWeight: '600',
  },
  trimestre: {
    marginTop: 30,
    marginBottom: 45,
    fontSize: 19,
    fontWeight: '600',
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
  cardNote: {
    paddingBottom: 10,
    paddingRight: 20,
    paddingTop: 20,

    marginVertical: 1,
    marginHorizontal: 16,
  },
  hrPetit: {
    width: 70,
    marginLeft: 3,
    borderWidth: 4,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#DF7C7C',
  },
  hrGrand: {
    width: 370,
    borderWidth: 0.8,
    marginTop: 15,
    borderColor: '#BBBBBB',
  },
  subject: {
    fontSize: 18,
    fontWeight: '600',
  },
  bottomNote: {
    flexDirection: 'row',
    marginTop: 10,
  },
  note: {
    marginLeft: 60,
  },
});

export default Note;
