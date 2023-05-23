import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import CustomInput from '../../../components/CustomInput/CustomInput';

const NewPasswordForm = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <View style={styles.containerPass}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Email:</Text>
        <CustomInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Mot de passe temporaire:</Text>
        <CustomInput
          style={styles.input}
          value={oldPassword}
          onChangeText={setOldPassword}
          placeholder="Mot de passe temporaire"
          secure
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Nouveau mot de passe:</Text>
        <CustomInput
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Nouveau mot de passe"
          secure
        />
      </View>
      <Button
        style={styles.buttonReset}
        title="Réinitialiser le mot de passe"
        onPress={() => onSubmit(email, oldPassword, newPassword)}>
        <Text style={styles.textButtonReset}>Réinitialiser</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#F3F3F3',
    borderRadius: 7,
    marginBottom: 30,
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
  buttonReset: {
    width: 350,
    height: 50,
    backgroundColor: '#595FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textButtonReset: {
    color: 'white',
    fontSize: 16,
  },
});

export default NewPasswordForm;
