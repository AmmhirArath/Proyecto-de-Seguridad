import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colores from '../constants/Colores';
import { useNavigation } from "@react-navigation/native";
import Background from './BackgroundGradient';

const Bienvenidos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bienvenido</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AprenderAdult")}>
          <Text style={styles.buttonText}>Informacion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Juegos")}>
          <Text style={styles.buttonText}>Juegos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Chatbot")}>
          <Text style={styles.buttonText}>Chatbot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: Colores.blanco,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Bienvenidos;
