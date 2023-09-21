import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const GenderScreen = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate('Location'); // Replace 'Location' with the appropriate screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Gender</Text>
      <TouchableOpacity style={styles.genderButton}>
        <Text style={styles.genderButtonText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.genderButton}>
        <Text style={styles.genderButtonText}>Female</Text>
      </TouchableOpacity>
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
  genderButton: {
    backgroundColor: '#E765A6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  genderButtonText: {
    color: 'white',
    fontSize: 16,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  nextButtonText: {
    fontSize: 18,
    color: 'grey',
    marginLeft: 10,
  },
});

export default GenderScreen;
