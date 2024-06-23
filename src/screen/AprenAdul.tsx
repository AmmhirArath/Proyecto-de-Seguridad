import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Colores from "../constants/Colores";

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phishing</Text>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={{
          uri: "https://www.valoradata.com/files/uploads/2019/09/phishing.jpg",
        }}
      />
      <View style={styles.definitionContainer}>
        <TouchableOpacity>
          <View style={styles.Boton}>
            <Text style={styles.Boton1}>Play</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.definitionTitle}>Definicion</Text>
        <Text style={styles.definitionText}>
          Técnica de ingeniería social en la que los atacantes se hacen pasar
          por entidades confiables para engañar a las víctimas y obtener
          información sensible, como contraseñas y datos bancarios.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
  },

  Boton: {
    backgroundColor: Colores.fondo,
    width: 75,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    borderRadius: 50,
    margin: 25,
  },

  Boton1: {
    fontSize: 20,
    fontWeight: "bold",
  },

  image: {
    marginTop: 15,
    width: 390,
    height: 280,
    borderRadius: 15,
    position: "static",
  },

  definitionContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
    width: 410,
    padding: 15,
    marginTop: 25,
    marginBottom: 25,
  },

  definitionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },

  definitionText: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Inicio;
