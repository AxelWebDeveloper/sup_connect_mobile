import {React, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import {BASE_URL} from '@env';
import axios from 'axios';

const Item = ({item}) => (
  <View style={styles.cardNote}>
    <View style={styles.timeGauche}>
      <View style={styles.rond} />
      <View style={styles.trait} />
    </View>
    <View style={styles.coteDroit}>
      <Text style={styles.time}>
        {' '}
        {item.startTime} - {item.endTime}{' '}
      </Text>
      <View style={styles.cardPlanning}>
        <Text style={styles.subject}>PHP</Text>
        <Text style={styles.profName}>Professeur - Alexis </Text>
        <Text style={styles.salle}> Salle 202 </Text>
      </View>
    </View>
  </View>
);

const Planning = () => {
  const [data, setData] = useState([]);

  const compareByStartTime = (a, b) => {
    const startTimeA = new Date(`2000-01-01 ${a.startTime}`);
    const startTimeB = new Date(`2000-01-01 ${b.startTime}`);
    return startTimeA - startTimeB;
  };

  useEffect(() => {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const formattedDate = today.toISOString();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.22:3000/api/courses/day/${formattedDate}`,
        );
        setData(response.data);
        console.log(formattedDate);
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
        <Text style={styles.titlePage}> Emploi du temps </Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        scrollEnabled={false}
        data={data.sort(compareByStartTime)}
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
    backgroundColor: '#E37878',
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
    width: 250,
    height: 50,
    borderRadius: 20,
    marginTop: -25,
    marginBottom: 35,
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
    paddingRight: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  rond: {
    width: 20,
    height: 20,
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: '#DF7C7C',
    borderColor: 'lightgrey',
  },
  trait: {
    width: 1,
    height: 150,
    borderWidth: 1,
    marginLeft: 9,
    borderColor: '#DF7C7C',
  },
  time: {
    marginLeft: 18,
    marginTop: 1,
    color: '#909090',
    fontSize: 16,
    fontWeight: '500',
  },
  cardPlanning: {
    marginLeft: 30,
    marginTop: 20,
    width: 300,
    height: 100,
    backgroundColor: 'rgba(223, 124, 124, 0.2)',
    borderRadius: 20,
  },
  subject: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(177, 95, 95, 1)',
    paddingTop: 10,
    paddingLeft: 35,
  },
  profName: {
    fontSize: 15,
    fontWeight: '400',
    color: 'rgba(177, 95, 95, 1)',
    paddingTop: 4,
    paddingLeft: 35,
  },
  salle: {
    fontSize: 15,
    fontWeight: '400',
    color: 'rgba(177, 95, 95, 1)',
    paddingTop: 4,
    paddingLeft: 31,
  },
});

export default Planning;
