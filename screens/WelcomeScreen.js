import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, 
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSignUp = () => {
    navigation.navigate('Registration');
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/Logo1.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Text style={styles.title}>Welcome to Love After 40 Kenya!</Text>
      <TouchableOpacity style={styles.buttonSignUp} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSignIn} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
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
  logo: {
    width: 200, 
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonSignUp: {
    backgroundColor: '#E765A6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonSignIn: {
    backgroundColor: '#F7931E', 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default WelcomeScreen;
