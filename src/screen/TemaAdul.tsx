import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Colores from "../constants/Colores";
import { useNavigation } from "@react-navigation/native";
import Background from "./BackgroundGradient";
import { SafeAreaView } from "react-native-safe-area-context";

const TemaAdul = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <Text style={styles.welcomeText}>Tipos de Ataques</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require("../assets/Img/nubeGrande.png")}
          style={styles.cloudImage2}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Phishing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Malware</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ransomware</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DoS y DDoS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingeniería Social</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ataques de Fuerza Bruta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ataques de Hombre en el Medio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Exploits de Vulnerabilidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cross-Site Scripting </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cross-Site Request Forgery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Eavesdropping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ataques de Redireccionamiento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rogue Software</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ataques de Criptografía</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ataques de Insider</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/Img/nubeGrande.png")}
          style={styles.cloudImage}
          resizeMode="contain"
        />
      </ScrollView>
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
    marginTop: 30,
    fontWeight: "bold",
    color: Colores.blanco,
    fontSize: 25,
  },

  scrollView: {
    padding: 20,
    width: 420,
  },
  button: {
    marginBottom: 25,
    width: 350,
    height: 50,
    backgroundColor: "white", // Color de fondo del botón TouchableOpacity
    borderRadius: 65,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black", // Color del texto dentro del botón
    textAlign: "center",
    fontWeight: "bold",
  },
  cloudImage: {
    height: 300,
    position: "absolute",
    bottom: -35,
    right: 20,
    zIndex: -1,
  },
  cloudImage2: {
    height: 400,
    position: "absolute",
    top: 70,
    left: 70,
    zIndex: -1,
  },
});

export default TemaAdul;
