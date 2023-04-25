import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import NewPasswordForm from './components/NewPasswordForm';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Container from '../../components/Container/Container';

const CompleteNewPassword = () => {
  const navigation = useNavigation();
  const handleSubmit = async (email, password, newPassword) => {
    try {
      const response = await axios.post(
        'http://10.160.32.35:3000/api/v1/auth/complete-new-password',
        {
          email: email,
          password: password,
          newPassword: newPassword,
        },
      );

      console.log('Mot de passe mis à jour avec succès:', response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Erreur lors de la réinitialisation du mot de passe:', error);
      // Gérez l'erreur et affichez un message à l'utilisateur si nécessaire
    }
  };
  return (
    <Container>
      <Image
        style={styles.imageLoginReset}
        source={require('../../assets/SupConnect.png')}
      />
      <View style={styles.resetPasswordTitle}>
        <Text style={styles.title}>Réinitialisation du mot de passe</Text>
      </View>
      <View style={styles.resetBot}>
        <NewPasswordForm onSubmit={handleSubmit} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  resetPasswordTitle: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 30,
    textAlign: 'center',
  },
  resetBot: {
    marginTop: 30,
  },
  imageLoginReset: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:30,
  },
});

export default CompleteNewPassword;
