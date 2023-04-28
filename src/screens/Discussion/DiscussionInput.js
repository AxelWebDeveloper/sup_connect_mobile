import React, {useState} from 'react';
import {TextInput, Button, StyleSheet, View} from 'react-native';

const ChatInput = ({onSendMessage}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre message ici"
        value={message}
        onChangeText={setMessage}
      />
      <Button
        style={styles.button}
        title="Envoyer"
        onPress={handleSendMessage}
        disabled={!message}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  input: {
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: '#F5F5F5',
    width: 250,
    height: 55,
  },
  button: {
    display: 'flex',
  },
});

export default ChatInput;
