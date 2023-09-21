import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Feather name="home" size={30} color="black" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Matches')}
        style={styles.button}
      >
        <Feather name="users" size={30} color="black" />
        <Text style={styles.text}>Matches</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.button}
      >
        <Feather name="message-circle" size={30} color="black" />
        <Text style={styles.text}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.button}
      >
        <Feather name="user" size={30} color="black" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 28,
    marginBottom: 40,
  },
  text: {
    color: 'black',
  },
});

export default NavigationBar;

