// GameContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GameContext = createContext();

const initialGameState = {
  currentScene: 'start',
  playerStats: {
    health: 100,
    experience: 0,
  },
  gameHistory: [],
};

const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialGameState);

  useEffect(() => {
    const loadGameState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('gameState');
        if (savedState) {
          setGameState(JSON.parse(savedState));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadGameState();
  }, []);

  const saveGameState = async (state) => {
    try {
      await AsyncStorage.setItem('gameState', JSON.stringify(state));
      setGameState(state);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GameContext.Provider value={{ gameState, saveGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
