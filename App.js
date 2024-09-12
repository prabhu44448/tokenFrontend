import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TokenGenerationScreen from './screens/TokenGenerationScreen';
import TokenTrackingScreen from './screens/TokenTrackingScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import QRScanner from './components/QRScanner';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="TokenGenerationScreen" component={TokenGenerationScreen} />
        <Stack.Screen name="TokenTrackingScreen" component={TokenTrackingScreen} />
        <Stack.Screen name="NotificationSettingsScreen" component={NotificationSettingsScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
