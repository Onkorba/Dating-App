import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const LocationScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleContinue = () => {
    navigation.navigate('ProfileSetup'); // Navigate to the ProfileSetupScreen
  };

  const townsInKenya = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Nakuru', 'Thika',
    'Kakamega', 'Kisii', 'Meru', 'Nyeri', 'Malindi', 'Kitale',
    // Add more towns here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Location</Text>
      <Picker
        selectedValue={selectedLocation}
        onValueChange={(itemValue) => setSelectedLocation(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a town" value="" />
        {townsInKenya.map((town, index) => (
          <Picker.Item key={index} label={town} value={town} />
        ))}
      </Picker>
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
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
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

export default LocationScreen;
