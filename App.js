import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import InterestsScreen from './screens/InterestsScreen';
import GenderScreen from './screens/GenderScreen';
import LocationScreen from './screens/LocationScreen';
import ProfileSetupScreen from './screens/ProfileSetupScreen';
import MatchingScreen from './screens/MatchingScreen';
import HomeScreen from './screens/HomeScreen';
import MatchesScreen from './screens/MatchesScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import InboxScreen from './screens/InboxScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Interests" component={InterestsScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
        <Stack.Screen name="Matching" component={MatchingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Matches" component={MatchesScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Inbox" component={InboxScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

