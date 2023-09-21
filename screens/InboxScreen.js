import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const InboxScreen = ({ route }) => {
  // Extract the user's name and profile image from the route params
  const { name, profileImage } = route.params;

  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') {
      return;
    }

    // Add the message to the list of messages
    setMessages((prevMessages) => [...prevMessages, { text: inputMessage, from: 'you' }]);

    // Clear the input field
    setInputMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              {
                alignSelf: message.from === 'you' ? 'flex-end' : 'flex-start',
                backgroundColor: message.from === 'you' ? '#DCF8C6' : '#E5E5EA',
              },
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
  },
});

export default InboxScreen;
