import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colores from '../constants/Colores';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la pantalla de Inicio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default Inicio;
