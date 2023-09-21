import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2); // Increase font size by 2
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2); // Decrease font size by 2
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  const handleReport = () => {
    // Implement report logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Font Size</Text>
        <TouchableOpacity onPress={decreaseFontSize}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.fontSizeText}>{fontSize}</Text>
        <TouchableOpacity onPress={increaseFontSize}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportButton} onPress={handleReport}>
        <Text style={styles.reportText}>Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
  button: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fontSizeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
  reportButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  reportText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
