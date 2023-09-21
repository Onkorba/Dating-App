import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const data = [
  {
    id: 1,
    name: 'Alice',
    age: 46,
    bio: 'Travel enthusiast, music lover, and bookworm.',
    profileImage: require('../assets/IMG_6977.jpg'), // Provide the correct image path
  },
  {
    id: 2,
    name: 'Bob',
    age: 49,
    bio: 'Sports fanatic, cooking enthusiast, and movie buff.',
    profileImage: require('../assets/IMG_6977.jpg'), // Provide the correct image path
  },
  {
    id: 3,
    name: 'George',
    age: 52,
    bio: 'Travel enthusiast, music lover, and bookworm.',
    profileImage: require('../assets/1.jpg'), // Provide the correct image path
  },
  // Add more items as needed
];

const MatchingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation(); // Initialize navigation

  const handleSwipeRight = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSwipeLeft = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={styles.container}>
      {currentIndex < data.length ? (
        <View style={styles.card}>
          <Image source={data[currentIndex].profileImage} style={styles.profileImage} />
          <Text style={styles.name}>{data[currentIndex].name}, {data[currentIndex].age}</Text>
          <Text style={styles.bio}>{data[currentIndex].bio}</Text>
        </View>
      ) : (
        <View style={styles.noMoreCards}>
          <Text style={styles.greyText}>No more cards</Text>
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <View style={styles.swipeButtonsContainer}>
          <TouchableOpacity onPress={handleSwipeLeft}>
            <Feather name="x" size={40} color="red" />
            <Text style={[styles.buttonLabel, styles.greyText]}>Nope</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSwipeRight}>
            <Feather name="heart" size={40} color="green" />
            <Text style={[styles.buttonLabel, styles.greyText]}>Like</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newButtonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Feather name="home" size={30} color="black" />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Matches')}>
            <Feather name="users" size={30} color="black" />
            <Text style={styles.text}>Matches</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <Feather name="message-circle" size={30} color="black" />
            <Text style={styles.text}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Feather name="user" size={30} color="black" />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', // Grey text color
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    color: 'black', // Grey text color
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
  },
  swipeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 250,
  },
  newButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  buttonLabel: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  greyText: {
    color: 'black', // Grey text color
  },
});

export default MatchingScreen;
