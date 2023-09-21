import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import NavigationBar from './NavigationBar';

const HomeScreen = ({ navigation }) => {
  // Define the data for the photos and links
  const photos = [
    {
      id: 'photo1',
      image: require('../assets/1D9A1348.jpg'),
      linkText: 'Twitter',
    },
    {
      id: 'photo2',
      image: require('../assets/IMG_6977.jpg'),
      linkText: 'Facebook',
    },
    {
      id: 'photo3',
      image: require('../assets/1D9A1224.jpg'),
      linkText: 'Whatsapp',
    },
    {
      id: 'photo4',
      image: require('../assets/IMG_6992.jpg'),
      linkText: 'Instagram',
    },
    {
      id: 'photo5',
      image: require('../assets/1.jpg'),
      linkText: 'Youtube',
    },
    {
      id: 'photo6',
      image: require('../assets/2.jpg'),
      linkText: 'Website',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <ScrollView>
        <View style={styles.photosContainer}>
          {photos.map((photo) => (
            <TouchableOpacity key={photo.id} style={styles.photoItem}>
              <Image source={photo.image} style={styles.photo} />
              <Text style={styles.linkText}>{photo.linkText}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <NavigationBar
        activeScreen="Home"
        onHomePress={() => navigation.navigate('Home')}
        onMatchesPress={() => navigation.navigate('Matches')}
        onChatPress={() => navigation.navigate('Chat')}
        onProfilePress={() => navigation.navigate('Profile')}
        navigation={navigation} // Pass the navigation prop to NavigationBar
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
    marginBottom: 30,
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

export default HomeScreen;
