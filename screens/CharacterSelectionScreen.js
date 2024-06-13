// screens/CharacterSelectionScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CharacterSelectionScreen = ({ navigation }) => {
  const handleCharacterSelect = (character) => {
    // Guarda el personaje seleccionado en el estado del juego y navega al juego
    navigation.navigate('Game', { character });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige tu personaje</Text>
      <Button title="Martín - El Joven Gaucho" onPress={() => handleCharacterSelect('Martín')} />
      <Button title="Isabel - La Curandera" onPress={() => handleCharacterSelect('Isabel')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B003B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#E8D589',
    marginBottom: 20,
  },
});

export default CharacterSelectionScreen;
