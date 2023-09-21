import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    // Navigate to the EditProfile screen
    navigation.navigate('ProfileSetup'); // Updated to navigate to ProfileSetup
  };

  const handleUpgrade = () => {
    // Implement logic for upgrading to premium
  };

  const handleSettings = () => {
    // Navigate to the Settings screen
    navigation.navigate('Settings'); // Updated to navigate to SettingsScreen
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/2.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.bio}>A brief bio about yourself.</Text>
      
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.upgradeButton} onPress={handleUpgrade}>
        <Text style={styles.upgradeButtonText}>Upgrade to Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  upgradeButton: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
  },
  upgradeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  settingsButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
  },
  settingsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
