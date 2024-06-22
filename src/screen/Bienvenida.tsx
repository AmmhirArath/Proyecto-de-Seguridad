import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colores from '../constants/Colores';

const Bienvenida = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ProSecure</Text>
        <Text style={styles.subtitle}>Technologies</Text>
        <Image source={require('../assets/ProSecure.png')} style={styles.logo} />
      </View>
      <View>
        <Image source={require('../assets/nubeGrande.png')} style={styles.nubeGrande} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 60,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    width: 300,
    height: 300,
  },
  nubeGrande:{
    width: 400,
    height: 350,
    opacity: 0.7
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Regular',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Regular'
  },
  button: {
    backgroundColor: Colores.blanco,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: Colores.negro,
    fontFamily: 'Bold'
  }
});

export default Bienvenida;
