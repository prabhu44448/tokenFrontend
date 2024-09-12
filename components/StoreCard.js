import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StoreCard = ({ store, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.storeName}>{store.name}A</Text>
      <Text style={styles.distance}>{store.distance} miles away</Text>
    </TouchableOpacity>
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
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  distance: {
    color: '#666',
  },
});

export default StoreCard;
