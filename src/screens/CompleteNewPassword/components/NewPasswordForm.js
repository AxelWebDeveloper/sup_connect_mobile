import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

const NewPasswordForm = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />

      <Text>Mot de passe temporaire:</Text>
      <TextInput
        value={oldPassword}
        onChangeText={setOldPassword}
        placeholder="Mot de passe temporaire"
        secureTextEntry
      />

      <Text>Nouveau mot de passe:</Text>
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Nouveau mot de passe"
        secureTextEntry
      />

      <Button
        title="Réinitialiser le mot de passe"
        onPress={() => onSubmit(email, oldPassword, newPassword)}>
        <Text>Réinitialiser</Text>
      </Button>
    </View>
  );
};

export default NewPasswordForm;
