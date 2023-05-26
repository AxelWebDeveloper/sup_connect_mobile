// Importing necessary dependencies
import {React, useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native-gesture-handler';
import TouchableNotes from './TouchableNotes';
import TouchableCalendar from './TouchableCalendar';
import TouchableMessage from './TouchableMessage';
import TouchableProfil from './TouchableProfil';
import axios from 'axios';

// Data for the list of cours
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3addazd53abb28ba',
    title: 'PHP',
    salle: 'Salle 303',
    hour: '11h',
    color: '#A9C1FF',
  },
  {
    id: '3ac68afc-c605-4dazdzd8d3-a4f8-fbd91aa97f63',
    title: 'Anglais',
    salle: 'Salle 101',
    hour: '18h30',
    color: '#CAA9FF',
  },
  {
    id: '58694a0f-dazd3da1-471f-bd96-145571e29d72',
    title: 'Javascript',
    salle: 'Salle 12',
    hour: '13h30',
    color: '#FFF6C7',
  },
];

// Component for rendering each course item in the list
const Item = ({item}) => (
  <View style={styles.coursItem}>
    <View style={[styles.backgroundItem, {backgroundColor: item.color}]} />
    <View style={{width: '100%', marginTop: 13, paddingHorizontal: 5}}>
      <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 5}}>
        {item.title}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 12, color: '#9A9A9A'}}>{item.salle}</Text>
        <Text style={{fontSize: 12, color: '#9A9A9A'}}>{item.hour}</Text>
      </View>
    </View>
  </View>
);

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.0.22:3000/api/users/1/grades',
        );
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={styles.oval} />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.subTitle}>Bonjour</Text>
            <Text style={styles.title}>Axel Demorest</Text>
          </View>
          <View style={styles.userPicture} />
        </View>
        <View style={styles.listIconsMenu}>
          <TouchableNotes />
          <TouchableCalendar />
          <TouchableMessage />
          <TouchableProfil />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.subContainerTitle}>Prochains cours</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
          <Text style={styles.subContainerTitle}>Dernières notes</Text>

          {dataNotes.map(item => (
            <View style={styles.noteItem} key={item.id}>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: '600', marginBottom: 5}}>
                  Matière
                </Text>
                <Text style={{fontSize: 15, color: '#9D9D9D'}}>
                  2 notes: Individuelle et groupe
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  {item.amount}/{item.total}
                </Text>
              </View>
            </View>
          ))}
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
    width: 500,
    height: 300,
    borderBottomLeftRadius: 500 / 2,
    borderBottomRightRadius: 500 / 2,
    backgroundColor: '#595FFF',
  },
  headerContainer: {
    marginTop: -220,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginBottom: 40,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
  },
  listIconsMenu: {
    height: 150,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.10)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
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
  userPicture: {},
  bodyContainer: {
    width: '100%',
    alignItems: 'center',
  },
  body: {
    width: '90%',
  },
  subContainerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#818181',
    marginTop: 30,
    marginBottom: 20,
  },
  coursItem: {
    height: 150,
    width: 150,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.10)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginRight: 15,
  },
  backgroundItem: {
    backgroundColor: '#A9C1FF',
    borderRadius: 10,
    height: '60%',
    width: '100%',
  },
  noteItem: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.10)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

Item.propTypes = {
  item: PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string,
    salle: PropTypes.string,
    hour: PropTypes.string,
  }),
};

export default Home;
