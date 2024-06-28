import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colores from "../constants/Colores";
import TouchableButton from "../components/Buttons/TouchableButton";
import LottieView from "lottie-react-native";
import Background from './BackgroundGradient';

const Bienvenida = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Background />
      <LottieView
        source={require("../assets/Animations/cloud.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>ProSecure</Text>
        <Text style={styles.subtitle}>Technologies</Text>
        <Image
          source={require("../assets/Img/ProSecure.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.nubeSota}>
        <Image
          source={require("../assets/Img/nubeGrande.png")}
          style={styles.nubeGrande}
        />
      </View>
      <TouchableButton
        name="Empezar"
        handleButton={() => navigation.navigate("SeleccionarEdad")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 50
  },
  header: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  nubeSota: {
    flex: 4,
  },

  logo: {
    width: 300,
    height: 300,
  },
  nubeGrande: {
    width: 400,
    height: 300,
    opacity: 0.7,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Regular",
    color: "white",
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontFamily: "Regular",
  },
  cloudContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    zIndex: 1
  },
  lottie: {
    width: 170,
    height: 250,
    position: "absolute",
    top: -40,  // Ajusta la distancia desde el borde inferior
    right: -30,
  },
});

export default Bienvenida;
