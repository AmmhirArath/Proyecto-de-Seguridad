import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colores from "../constants/Colores";
import TouchableButton from "../components/Buttons/TouchableButton";

const Bienvenida = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ProSecure</Text>
        <Text style={styles.subtitle}>Technologies</Text>
        <Image
          source={require("../assets/ProSecure.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.nubeSota}>
        <Image
          source={require("../assets/nubeGrande.png")}
          style={styles.nubeGrande}
        />
      </View>
      <TouchableButton name="Empezar" handleButton={() => navigation.navigate("SeleccionarEdad")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  nubeSota:{
    flex: 4
  },
 
  logo: {
    width: 300,
    height: 300,
  },
  nubeGrande: {
    width: 400,
    height: 350,
    opacity: 0.7,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Regular",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    fontFamily: "Regular",
  }
});

export default Bienvenida;
