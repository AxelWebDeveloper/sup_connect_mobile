import {React, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-screens';
import CustomInput from '../../components/CustomInput/CustomInput';
import IconMessage from '../../assets/IconMessage.png';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATAmessage = [
  {
    id: 'bd7acbeazea-c1b1-46c2-aed5-3ad53abb28ba',
    image: IconMessage,
    name: 'Walid VacheKiri',
    message: 'Je suis un développeur vraiment gros...',
    time: '15:30 - Aujourd’hui',
  },
  {
    id: 'bd7acbea-c1b1-4eaz6c2-aed5-3ad53abb28ba',
    image: IconMessage,
    name: 'Axel deforest',
    message: 'Salut, t’es chaud on va au duplex...',
    time: 'Il y a 3 jours',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53eazabb28ba',
    image: IconMessage,
    name: 'Oceane Leboeuf',
    message: 'Dit au Po jsuis malade ...',
    time: 'Il y a 3 jours',
  },
  {
    id: 'bd7acbea-c1b1-46cfaf2-aed5-3ad53abb28ba',
    image: IconMessage,
    name: 'Alexis hack',
    message: 'vendredi go au bar ...',
    time: 'Il y a 3 jours',
  },
];

const DATAgroupe = [
  {
    id: 'bd7vdfvacbea-c1b1-46c2-aed5-3ad53abb28ba',
    imageGroupe: IconMessage,
    titre: 'L3 Paris - Coding Factory',
    messageGroupe: 'Robin est la demain ? ...',
    timeGroupe: '15:30 - Aujourd’hui',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aevdfvd5-3ad53abb28ba',
    imageGroupe: IconMessage,
    titre: 'Groupe 4 php',
    messageGroupe: 'Robin est la demain ? ...',
    timeGroupe: '15:30 - Aujourd’hui',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53vfdvdfabb28ba',
    imageGroupe: IconMessage,
    titre: 'Cours de danse Robin',
    messageGroupe: 'Robin est la demain ? ...',
    timeGroupe: '15:30 - Aujourd’hui',
  },
  {
    id: 'bd7acbeaaa-c1b1-46c2-aedaz5-3ad53vfdvdfabb28ba',
    imageGroupe: IconMessage,
    titre: 'Cours de chant Robin',
    messageGroupe: 'Robin est la demain ? ...',
    timeGroupe: '15:30 - Aujourd’hui',
  },
];

const ItemMessage = ({itemMessage}) => (
  <View style={styles.cardMessage}>
    <View style={styles.divImage}>
      <Image style={styles.iconMessage} source={itemMessage.image} />
    </View>
    <View style={styles.divText}>
      <Text style={styles.nameText}> {itemMessage.name}</Text>
      <Text style={styles.messageText}> {itemMessage.message}</Text>
    </View>
  </View>
);
/*
<View style={styles.divTime}>
      <Text style={styles.timeText}> {itemMessage.time} </Text>
    </View>
 */

const ItemGroupe = ({itemGroupe}) => (
  <View style={styles.cardMessage}>
    <View style={styles.divImaheGroupe}>
      <Image style={styles.iconGroupe} source={itemGroupe.imageGroupe} />
    </View>
    <View style={styles.divTextGroupe}>
      <Text style={styles.nameTextGroupe}> {itemGroupe.titre}</Text>
      <Text style={styles.messageTextGroupe}> {itemGroupe.messageGroupe}</Text>
    </View>
  </View>
);
/*<View style={styles.divTimeGroupe}>
        <Text style={styles.timeTextGroupe}> {itemGroupe.time} </Text>
      </View>
 */
const Message = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('testestt');
  };

  const handleTextChange = text => {
    setSearchQuery(text);
    handleSearch(text);
  };

  return (
    <SafeAreaView style={styles.scrollview}>
      <ScrollView>
        <View style={styles.topMessage}>
          <TextInput
            style={{
              height: 50,
              width: 250,
              borderRadius: 10,
              marginLeft: 25,
              backgroundColor: 'white',
              paddingLeft: 15,
            }}
            onChangeText={handleTextChange}
            value={searchQuery}
            placeholder="Rechercher un message..."
          />
          <View style={styles.iconDiv}>
            <MaterialCommunityIcons
              name="chat-plus-outline"
              size={23}
              color="#A1A1A1"
            />
          </View>
        </View>
        <View style={styles.botMessage}>
          <Text style={styles.messageTitle}>Messages</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            scrollEnabled={false}
            data={DATAmessage}
            renderItem={({item}) => <ItemMessage itemMessage={item} />}
            keyExtractor={itemMessage => itemMessage.id}
          />
          <Text style={styles.groupeTitle}>Groupes</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            scrollEnabled={false}
            data={DATAgroupe}
            renderItem={({item}) => <ItemGroupe itemGroupe={item} />}
            keyExtractor={itemGroupe => itemGroupe.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  iconDiv: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    marginRight: 25,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botMessage: {
    marginTop: 20,
  },
  messageTitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 19,
    marginLeft: 25,
  },
  cardMessage: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 15,
    height: 75,
    borderRadius: 10,
  },
  divImage: {
    marginLeft: 20,
    marginTop: 13,
  },
  iconMessage: {
    width: 45,
    height: 45,
  },
  divText: {
    marginLeft: 20,
    marginTop: 16,
  },
  nameText: {
    fontWeight: '500',
    fontSize: 15,
  },
  messageText: {
    color: 'rgba(161, 161, 161, 1)',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    marginTop: 4,
  },
  divTime: {
    marginLeft: -10,
  },
  timeText: {
    fontStyle: 12,
    fontWeight: '400',
    color: '#A1A1A1',
  },
  groupeTitle: {
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 19,
    marginLeft: 25,
  },
  divImaheGroupe: {
    marginLeft: 20,
    marginTop: 13,
  },
  iconGroupe: {
    width: 45,
    height: 45,
  },
  divTextGroupe: {
    marginLeft: 20,
    marginTop: 16,
  },
  nameTextGroupe: {
    fontWeight: '500',
    fontSize: 15,
  },
  messageTextGroupe: {
    color: 'rgba(161, 161, 161, 1)',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    marginTop: 4,
  },
  divTimeGroupe: {
    marginLeft: -10,
  },
  timeTextGroupe: {
    fontStyle: 12,
    fontWeight: '400',
    color: '#A1A1A1',
  },
});

export default Message;
