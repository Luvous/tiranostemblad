// screens/MainMenuScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../authprovider.js';
import { GameContext } from '../GameContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainMenuScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const { gameState, saveGameState } = useContext(GameContext);
  const [playerStats, setPlayerStats] = useState({
    gamesPlayed: 0,
    longestSurvival: 0,
    favoriteCharacter: '',
  });

  useEffect(() => {
    const fetchPlayerStats = async () => {
      // Aquí puedes obtener las estadísticas del jugador desde Firebase
      const stats = {
        gamesPlayed: 12,
        longestSurvival: 125,
        favoriteCharacter: 'Martín',
      };
      setPlayerStats(stats);
    };

    fetchPlayerStats();
  }, []);

  const handleNewGame = async () => {
    await AsyncStorage.removeItem('gameState');
    saveGameState({ ...gameState, currentScene: 'start' });
    navigation.navigate('CharacterSelection');
  };

  const handleContinue = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>El Eterno Fogón</Text>
      {gameState.currentScene !== 'start' ? (
        <Button title="CONTINUAR" onPress={handleContinue} />
      ) : null}
      <Button title="NUEVA PARTIDA" onPress={handleNewGame} />
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Partidas Jugadas: {playerStats.gamesPlayed}</Text>
        <Text style={styles.statsText}>Mayor Tiempo: {playerStats.longestSurvival} Días</Text>
        <Text style={styles.statsText}>Personaje Favorito: {playerStats.favoriteCharacter}</Text>
      </View>
      <Button title="VER LOGROS" onPress={() => navigation.navigate('Achievements')} />
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
  statsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  statsText: {
    fontSize: 16,
    color: '#E8D589',
  },
});

export default MainMenuScreen;
