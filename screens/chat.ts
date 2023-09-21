// ChatScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import TextExtraction from './TextExtraction'; // Import the text extraction function

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') {
      return;
    }

    // Extract text using the TextExtraction function
    const extractedText = TextExtraction(inputMessage);

    // Add the message to the list of messages
    setMessages((prevMessages) => [...prevMessages, extractedText]);

    // Clear the input field
    setInputMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item}</Text>
          </View>
        )}
      />
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
  messageContainer: {
    backgroundColor: '#ECECEC',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    marginBottom: 30,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 25,
    marginLeft: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatScreen;
