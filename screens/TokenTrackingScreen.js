import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TokenCard from '../components/TokenCard';

const TokenTrackingScreen = () => {
  // Simulate fetching token data
  const token = {
    number: '12345',
    position: '5',
    waitTime: '10',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Token Status</Text>
      <TokenCard token={token} />
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
});

export default TokenTrackingScreen;
