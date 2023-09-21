import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ChatScreen = () => {
  // Dummy data for chat list (replace with your actual data)
  const chats = [
    {
      id: '1',
      name: 'Alice',
      lastMessage: 'Hello, how are you?',
    },
    {
      id: '2',
      name: 'Bob',
      lastMessage: 'Im doing great, thanks!',
    },
    {
      id: '3',
      name: 'Charlie',
      lastMessage: 'Lets meet up tomorrow.',
    },
    // Add more chat items as needed
  ];

  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => {
              // Navigate to InboxScreen with user's name as a parameter
              navigation.navigate('Inbox', { name: item.name });
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatItem: {
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#777777',
  },
});

export default ChatScreen;
