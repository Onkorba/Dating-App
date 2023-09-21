import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icons

const InterestsScreen = ({ navigation }) => {
  const interests = [
    'Travel', 'Food', 'Sports', 'Music', 'Art', 'Reading',
    'Fitness', 'Cinema', 'Gaming', 'Cooking', 'Fashion', 'Social'
  ];

  const handleInterestPress = (interest) => {
    // Handle button press for the selected interest
    console.log(`Selected interest: ${interest}`);
  };

  const handleNext = () => {
    navigation.navigate('Gender'); // Navigate to the GenderScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Interests</Text>
      <View style={styles.buttonsContainer}>
        {interests.map((interest, index) => (
          <TouchableOpacity
            key={index}
            style={styles.interestButton}
            onPress={() => handleInterestPress(interest)}
          >
            <Text style={styles.buttonText}>{interest}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
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
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  interestButton: {
    backgroundColor: '#E765A6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'grey',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default InterestsScreen;
