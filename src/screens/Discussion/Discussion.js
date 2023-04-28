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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconDiscussions from '../../assets/IconMessage.png';
import Container from '../../components/Container/Container';
import {
  black,
  white,
} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import ChatInput from './DiscussionInput';

const DATAdiscussion = [
  {
    id: 'bd7acbea-c1b1-46iuhbic2-aed5-3ad53abb28ba',
    content:
      'salut ta les craeaeazeazeazeazeazeaeazeazeazeazeazeazeazeazeazeal,fe,azf,az,faz,fo,az,opfxakzknlcaznlfdlnkaznzanlfnlakzflnaznklfazlknfnkaznfkl,dampté ?',
    timeDiscussion3: '10H29',
    author: '1',
  },
  {
    id: 'bd7acbea-c1b1-46ciubv2-aed5-3ad53aadzbb28ba',
    content: 'Oue allo bassem',
    timeDiscussion3: '10H30',
    author: '2',
  },
  {
    id: 'bd7acbea-c1ddadgygyuaazb1-46cv2-aed5-3ad53aadzbb28ba',
    content: 'oue cest greg',
    timeDiscussion3: '10H30',
    author: '1',
  },
  {
    id: 'bd7acbea-c1b1-46iiicv2-aed5-3dazad53aadzbb28ba',
    content: 'Quoicoubeh greg',
    timeDiscussion3: '10H30',
    author: '2',
  },
  {
    id: 'bddazd7acbea-c1b1-46iiicv2-aed5-3dazad53aadzbb28ba',
    content: 'Quoicoubeh greg',
    timeDiscussion3: '10H30',
    author: '1',
  },
  {
    id: 'bd7acbedazdazda-c1b1-46iiicv2-aedxqsx5-3dazad53aadzbb28ba',
    content: 'Quoicoubeh greg',
    timeDiscussion3: '10H30',
    author: '2',
  },
];

const ItemDiscussion = ({itemDiscussion}) => (
  <View
    style={[
      styles.containerDiscussions,
      itemDiscussion.author === '1' && styles.divDiscussionAuthor,
    ]}>
    <View
      style={[
        styles.cardDiscussions,
        itemDiscussion.author === '1' && styles.divCardDiscussionAuthor,
        ,
      ]}>
      <Text
        style={[
          styles.cardDisscusionsText,
          itemDiscussion.author === '1' && styles.itemDiscussionsAuthor,
        ]}>
        {itemDiscussion.content}{' '}
      </Text>
    </View>
    <View style={styles.cardDisscusionsTime}>
      <Text style={styles.timeDiscussion}>
        {' '}
        {itemDiscussion.timeDiscussion3}{' '}
      </Text>
    </View>
  </View>
);

const Discussion = () => {
  return (
    <SafeAreaView style={styles.containerDiscussion}>
      <View style={styles.divDiscussionTop}>
        <Ionicons
          style={styles.iconBack}
          name="arrow-back"
          size={30}
          color="#33363F"
        />
        <Image source={IconMessage} style={styles.iconDiscussion} />
        <View style={styles.divTopRight}>
          <Text style={styles.userOnline}> Robin des bois </Text>
          <Text style={styles.satusOnline}> En ligne </Text>
        </View>
      </View>
      <View style={styles.divDiscussionsMid}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={DATAdiscussion}
          renderItem={({item}) => <ItemDiscussion itemDiscussion={item} />}
          keyExtractor={itemDiscussion => itemDiscussion.id}
        />
      </View>
      <View style={styles.divBot}>
        <ChatInput />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  divDiscussionAuthor: {
    display: 'flex',
    alignSelf: 'flex-end',
  },
  containerDiscussion: {
    flex: 1,
    padding: 0,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  divDiscussionTop: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 50,
    shadowColor: 'black',
    shadowRadius: 1,
  },
  iconBack: {
    marginLeft: 22,
    marginRight: 25,
    width: 25,
    height: 25,
  },
  iconDiscussion: {
    width: 50,
    height: 50,
  },
  divTopRight: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 27,
  },
  userOnline: {
    fontWeight: '700',
    fontSize: 18,
  },
  satusOnline: {
    color: '#82A274',
    paddingTop: 1,
    fontSize: 15,
  },
  divDiscussionsMid: {
    backgroundColor: '#F5F5F5',
    height: 620,
  },
  containerDiscussions: {
    width: 260,
    backgroundColor: '#F5F5F5',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  cardDiscussions: {
    width: 255,
    minHeight: 55,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    display: 'flex',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 0,
  },
  divCardDiscussionAuthor: {
    backgroundColor: '#595FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardDisscusionsText: {
    fontSize: 15,
    color: 'black',
  },
  itemDiscussionsAuthor: {
    fontSize: 15,
    color: 'white',
  },
  cardDisscusionsTime: {
    marginTop: 5,
  },
  timeDiscussion: {
    fontSize: 12,
    color: '#A1A1A1',
  },
});

export default Discussion;
