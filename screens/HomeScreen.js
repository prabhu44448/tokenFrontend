import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import StoreCard from '../components/StoreCard';

// Sample JSON data for stores (instead of an actual API call)
const sampleStores = [
  {
    id: "1",
    name: "Tech Store",
    address: "123 Tech Avenue",
    distance: "2.5 km",
    services: ["Billing", "Pickup"]
  },
  {
    id: "2",
    name: "Gadget World",
    address: "456 Gadget Street",
    distance: "3.1 km",
    services: ["Billing", "Service", "Pickup"]
  },
  {
    id: "3",
    name: "Smart Devices",
    address: "789 Smart Road",
    distance: "1.2 km",
    services: ["Repair", "Pickup"]
  },
  {
    id: "4",
    name: "Techie Town",
    address: "1010 Techie Blvd",
    distance: "0.9 km",
    services: ["Billing", "Repair"]
  }
];

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = React.useState('');
  const [stores, setStores] = React.useState(sampleStores);

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={stores.filter(store => store.name.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StoreCard
            store={item}
            onPress={() => navigation.navigate('TokenGenerationScreen', { store: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
