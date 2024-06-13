// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './authprovider.js';
import { GameProvider } from './GameContext';
import LoginScreen from './screens/LoginScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import CharacterSelectionScreen from './screens/CharacterSelectionScreen';
import GameScreen from './screens/GameScreen';
// import AchievementsScreen from './screens/AchievementsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <GameProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="MainMenu" component={MainMenuScreen} />
            <Stack.Screen name="CharacterSelection" component={CharacterSelectionScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            {/* <Stack.Screen name="Achievements" component={AchievementsScreen} /> */}
          </Stack.Navigator>
        </GameProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
