// screens/LoginScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../authprovider.js';

const LoginScreen = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIRANOS TEMBLAD</Text>
      <Button title="INICIAR SESIÓN" onPress={signInWithGoogle} />
      <Button title="REGISTRARSE" onPress={signInWithGoogle} />
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

export default LoginScreen;
