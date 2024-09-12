import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  // Simulated user data
  const user = {
    name: 'John Doe',
    savedShops: ['Store A', 'Store B'],
    pastTokens: [
      { number: '12345', service: 'Pickup' },
      { number: '67890', service: 'Billing' },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Text>Name: {user.name}</Text>
      <Text style={styles.sectionHeader}>Saved Shops</Text>
      {user.savedShops.map((shop, index) => (
        <Text key={index}>{shop}</Text>
      ))}
      <Text style={styles.sectionHeader}>Past Tokens</Text>
      {user.pastTokens.map((token, index) => (
        <Text key={index}>Token {token.number} - {token.service}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default UserProfileScreen;
