import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { generateToken } from '../services/api';

const TokenGenerationScreen = ({ route }) => {
  const { store } = route.params;
  const [token, setToken] = useState(null);

  const handleGenerateToken = async () => {
    const newToken = await generateToken(store.id);
    setToken(newToken);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.storeName}>{store.name}</Text>
      <Button title="Generate Token" onPress={handleGenerateToken} />
      {token && (
        <View style={styles.tokenInfo}>
          <Text>Token Number: {token.number}</Text>
          <Text>Position: {token.position}</Text>
          <Text>Wait Time: {token.waitTime} mins</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tokenInfo: {
    marginTop: 20,
  },
});

export default TokenGenerationScreen;
