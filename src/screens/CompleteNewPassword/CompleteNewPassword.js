import React from 'react';
import {Text, View} from 'react-native';
import NewPasswordForm from './components/NewPasswordForm';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CompleteNewPassword = () => {
  const navigation = useNavigation();
  const handleSubmit = async (email, password, newPassword) => {
    try {
      const response = await axios.post(
        'http://10.160.32.28:3000/api/v1/auth/complete-new-password',
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
    <SafeAreaView>
      <NewPasswordForm onSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

export default CompleteNewPassword;
