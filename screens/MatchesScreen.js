import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavigationBar from './NavigationBar';

// Sample data for matches (you can replace it with your own data)
const matchesData = [
  {
    id: '1',
    name: 'George',
    image: require('../assets/1.jpg'),
  },
  {
    id: '2',
    name: 'Onkoba',
    image: require('../assets/2.jpg'),
  },
  {
    id: '3',
    name: 'Mekenye',
    image: require('../assets/3.jpg'),
  },
  {
    id: '4',
    name: 'John',
    image: require('../assets/1.jpg'),
  },
  {
    id: '5',
    name: 'Dave',
    image: require('../assets/2.jpg'),
  },
  {
    id: '6',
    name: 'Esther',
    image: require('../assets/3.jpg'),
  },
  // Add more match items as needed
];

const MatchesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matches</Text>
      <View style={styles.photosContainer}>
        {matchesData.map((match) => (
          <TouchableOpacity
            key={match.id}
            style={styles.photoItem}
            onPress={() => navigation.navigate('Inbox', { name: match.name })}
          >
            <Image source={match.image} style={styles.photo} />
            <Text style={styles.linkText}>{match.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <NavigationBar
        activeScreen="Matches"
        onHomePress={() => navigation.navigate('Home')}
        onMatchesPress={() => navigation.navigate('Matches')}
        onChatPress={() => navigation.navigate('Chat')}
        onProfilePress={() => navigation.navigate('Profile')}
        navigation={navigation}
      />
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  photoItem: {
    alignItems: 'center',
    marginBottom: 50,
    marginHorizontal: 13,
    justifyContent: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  linkText: {
    fontSize: 16,
  },
});

export default MatchesScreen;
