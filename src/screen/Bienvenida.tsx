import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Colores from '../constants/Colores';

const Bienvenida = () =>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>ProSecure</Text>
          <Text style={styles.subtitle}>Technologies</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EMPEZAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colores.fondo
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: Colores.blanco,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#7BBDF5',
    fontWeight: 'bold',
  },
});

export default Bienvenida;
