import {React} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import {BASE_URL} from '@env';
import moment from 'moment';
import 'moment/locale/fr';
import {useEffect, useState} from 'react';

const Item = ({item}) => (
  <View style={styles.cardNote}>
    <View style={styles.hrPetit} />
    <Text style={styles.subject}> {item.subject} </Text>
    <View style={styles.bottomNote}>
      <Text style={styles.date}>{item.date}</Text>
      <Text> | </Text>
      <Text style={styles.moyenne}> {item.heure} </Text>
      <View style={styles.viewAmount}>
        <Text style={styles.amountNote}>{item.heureRetard}</Text>
      </View>
    </View>
    <View style={styles.hrGrand} />
  </View>
);
const Absence = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.0.22:3000/api/delays/users/1/delays',
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.box}>
        <View style={styles.oval} />
      </View>
      <View style={styles.titleDiv}>
        <Text style={styles.titlePage}> Retard </Text>
      </View>
      <FlatList
        style={styles.flastlist}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        scrollEnabled={false}
        data={data}
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
    height: 140,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: 'rgba(234, 170, 111, 0.8)',
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
    width: 65,
    marginLeft: 3,
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#DF7C7C',
  },
  hrGrand: {
    width: 370,
    borderWidth: 0.8,
    marginTop: 15,
    marginBottom: -15,
    borderColor: '#BBBBBB',
  },
  subject: {
    fontSize: 17,
    fontWeight: '600',
  },
  bottomNote: {
    flexDirection: 'row',
    marginTop: 10,
  },
  viewAmount: {
    width: 220,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  flastlist: {
    marginBottom: 20,
  },
});

export default Absence;
