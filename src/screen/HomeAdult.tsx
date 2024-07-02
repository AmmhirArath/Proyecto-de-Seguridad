import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colores from "../constants/Colores";
import { useNavigation } from "@react-navigation/native";
import Background from "./BackgroundGradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Bienvenidos = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <Text style={styles.welcomeText}>Bienvenido </Text>
      <Image
        source={require("../assets/Img/Logosptm.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.containerBotton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AprenderAdult")}
        >
          <Text style={styles.buttonText}>Informacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Juegos")}
        >
          <Text style={styles.buttonText}>Juegos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Chatbot")}
        >
          <Text style={styles.buttonText}>Chatbot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/Img/nubeGrande.png")}
        style={styles.image2}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontWeight: "bold",
    color: Colores.blanco,
    fontSize: 25,
    marginVertical: 50,
  },
  image: {
    marginVertical: 20,
  },
  image2: {
    height: 250,
    position: "relative",
  },

  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
  },
  containerBotton: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});

export default Bienvenidos;
