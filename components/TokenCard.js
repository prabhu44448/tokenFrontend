import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TokenCard = ({ token }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Token Number:</Text>
      <Text style={styles.value}>{token.number}</Text>
      <Text style={styles.label}>Queue Position:</Text>
      <Text style={styles.value}>{token.position}</Text>
      <Text style={styles.label}>Estimated Wait Time:</Text>
      <Text style={styles.value}>{token.waitTime} minutes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TokenCard;
