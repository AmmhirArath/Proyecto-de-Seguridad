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
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <Image
        source={require("../assets/Img/Logosptm.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TemasAdultos")}
        >
          <Text style={styles.buttonText}>Información</Text>
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
        style={styles.cloudImage}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/Img/nubeGrande.png")}
        style={styles.cloudImage2}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  welcomeText: {
    fontWeight: "bold",
    color: Colores.blanco,
    fontSize: 25,
    marginVertical: 30,
  },
  logo: {
    height: 250,
    marginTop: 20, // Ajuste de margen superior
  },
  buttonContainer: {
    marginTop: 10, // Ajuste de margen superior
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginVertical: 9,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  cloudImage: {
    height: 300,
    position: "absolute",
    bottom: -35,
    right: 20,
  },
  cloudImage2: {
    height: 150,
    position: "absolute",
    top: 70,
    left: 70,
  },
});

export default Bienvenidos;
