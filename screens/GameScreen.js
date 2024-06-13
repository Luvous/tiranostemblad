// screens/GameScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GameContext } from '../GameContext';

const GameScreen = ({ route, navigation }) => {
  const { gameState, saveGameState } = useContext(GameContext);
  const [currentScene, setCurrentScene] = useState(gameState.currentScene);
  const { character } = route.params;

  useEffect(() => {
    if (currentScene === 'start') {
      setCurrentScene(character === 'Martín' ? 'martinStart' : 'isabelStart');
    }
  }, []);

  const handleDecision = (nextScene) => {
    setCurrentScene(nextScene);
    saveGameState({ ...gameState, currentScene: nextScene });
  };

  const scenes = {
    martinStart: {
      text: "Martín, el joven gaucho, comienza su jornada en el campo...",
      options: [
        { text: "Explorar el campo", nextScene: 'martinExplore' },
        { text: "Ir al pueblo", nextScene: 'martinTown' },
      ],
    },
    isabelStart: {
      text: "Isabel, la curandera, se prepara para un día lleno de curaciones...",
      options: [
        { text: "Ir al bosque por hierbas", nextScene: 'isabelForest' },
        { text: "Atender a los enfermos del pueblo", nextScene: 'isabelTown' },
      ],
    },
    // Más escenas...
  };

  const scene = scenes[currentScene];

  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>{scene.text}</Text>
      {scene.options.map((option, index) => (
        <Button
          key={index}
          title={option.text}
          onPress={() => handleDecision(option.nextScene)}
        />
      ))}
      <Button title="Terminar Partida" onPress={() => navigation.navigate('MainMenu')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B003B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  storyText: {
    fontSize: 18,
    color: '#E8D589',
    marginBottom: 20,
  },
});

export default GameScreen;
