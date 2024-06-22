import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Bienvenido = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Informacion"
          onPress={() => navigation.navigate('Informacion')}
          color="#fff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Juegos"
          onPress={() => navigation.navigate('Juegos')}
          color="#fff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Puntuacion"
          onPress={() => navigation.navigate('Puntuacion')}
          color="#fff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Salir"
          onPress={() => navigation.navigate('Salir')}
          color="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e7d9e', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#000', 
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default Bienvenido;
