import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileSetupScreen = ({ navigation }) => {
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleContinue = () => {
    navigation.navigate('Matching'); // Navigate to the MatchingScreen
  };

  const handleImageUpload = () => {
    // Implement image upload logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Setup</Text>
      <Text style={styles.subtitle}>Tell us more about yourself</Text>
      <TouchableOpacity style={styles.profileImageContainer} onPress={handleImageUpload}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Feather name="camera" size={36} color="#888" />
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.bioInput}
        placeholder="Tell us about yourself"
        multiline
        numberOfLines={4}
        value={bio}
        onChangeText={setBio}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Feather name="arrow-right" size={24} color="grey" />
        <Text style={styles.nextButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 60,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  bioInput: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 150,
    right: 30,
  },
  nextButtonText: {
    fontSize: 18,
    color: 'grey',
    marginLeft: 10,
  },
});

export default ProfileSetupScreen;
