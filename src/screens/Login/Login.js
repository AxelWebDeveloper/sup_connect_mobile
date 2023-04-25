import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Image} from 'react-native';
import axios from 'axios';
import {Button} from 'react-native-paper';
import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [value, onChangeValue] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    const {email, password} = value;
    axios
      .post('http://10.160.32.35:3000/api/v1/auth/login', {email, password})
      .then(response => {
        console.log('Utilisateur connecté avec succès:', response.data);
        if (response.data && response.data.passwordChangeRequired) {
          navigation.navigate('CompleteNewPassword');
        } else {
          const accessToken = response.data.accessToken;
          AsyncStorage.setItem('accessToken', accessToken);
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        setErrorMessage("Erreur lors de la connexion de l'utilisateur");
      });
  };

  return (
    <Container style={styles.container}>
      <View>
        <Image
          style={styles.imageLogin}
          source={require('../../assets/SupConnect.png')}
        />
        <Text style={styles.title}>Connectez-vous</Text>
        <Text style={styles.description}>
          Nous sommes heureux de vous revoir. Vous pouvez vous connecter pour
          consulter vos données
        </Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}> Identifiant </Text>
          <CustomInput
            style={styles.input}
            value={value.email}
            onChangeText={text => onChangeValue({...value, email: text})}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}> Mot de passe </Text>
          <CustomInput
            style={styles.input}
            value={value.password}
            onChangeText={text => onChangeValue({...value, password: text})}
            secure={true}
          />
        </View>

        <View>
          {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>

        <Button style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.textButton}>Connexion</Text>
        </Button>

        <Text style={styles.textMdp}>Mot de passe oublié ?</Text>
      </View>
      <Text style={styles.compteLogin}>Vous n’avez pas de compte ?</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    backgroundColor: '#F3F3F3',
    borderRadius: 7,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  input: {
    color: 'black',
  },
  label: {
    fontSize: 11,
    paddingBottom: 7,
    color: '#A8A8A8',
  },
  imageLogin: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontStyle: 'normal',
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2F2F2F',
    alignSelf: 'center',
  },
  description: {
    fontStyle: 'normal',
    fontSize: 18,
    color: '#A8A8A8',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonLogin: {
    backgroundColor: '#595FFF',
    borderRadius: 7,
    width: 360,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  textMdp: {
    color: '#595FFF',
    fontSize: 12,

    marginTop: 12,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  compteLogin: {
    fontSize: 15,
    color: '#A8A8A8',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Login;
