import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [breweryName, setBreweryName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function loadBrewery() {
      try {
        const response = await fetch(
          'https://api.openbrewerydb.org/v1/breweries/random'
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const breweryResponse = await response.json();
        const brewery = Array.isArray(breweryResponse)
          ? breweryResponse[0]
          : breweryResponse;
        if (!brewery || typeof brewery.name !== 'string') {
          throw new Error('The API response did not include a brewery name');
        }

        setBreweryName(brewery.name);
      } catch (error) {
        console.error('Failed to load a brewery from Open Brewery DB:', error);
        setErrorMessage('Could not load a brewery. Check your connection.');
      }
    }

    loadBrewery();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pint Patrol</Text>
      <Text style={styles.brewery}>
        {errorMessage || breweryName || 'Loading a brewery...'}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  brewery: {
    fontSize: 18,
    textAlign: 'center',
  },
});
