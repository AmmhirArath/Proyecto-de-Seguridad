import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Colores from "../constants/Colores";
import TouchableButton from "../components/Buttons/TouchableButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "./BackgroundGradient";

const ProQuiz = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={titles.container}>
      <Background />
      <Text style={titles.titulo}>ProSecure</Text>
      <Text style={titles.subtitulo}>Technologies</Text>
      <Image
        style={titles.image}
        source={require("../assets/Img/Ataques.png")}
      ></Image>
      <Text style={titles.welcome}>Ataques Históricos de Hacking</Text>
      <TouchableButton
        name="Empezar"
        handleButton={() => navigation.navigate("HistoriaHacks")}
        styleContainer={titles.button}
        styleText={titles.buttonText}
      />
      <Image
        source={require("../assets/Img/nubeGrande.png")}
        style={titles.cloudImage2}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/Img/nubeGrande.png")}
        style={titles.cloudImage3}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const titles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.azulclaro,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  cloudImage3: {
    height: 300,
    width: 300,
    position: "absolute",
    left: 300,
    bottom: 650,
  },
  titulo: {
    marginTop: 25,
    fontSize: 40,
    fontFamily: "Bold",
    color: Colores.blanco,
  },
  cloudImage2: {
    height: 300,
    width: 300,
    position: "absolute",
    bottom: -70,
    left: -50,
  },
  subtitulo: {
    fontSize: 30,
    marginBottom: 25,
    fontFamily: "Bold",
    color: Colores.blanco,
    paddingBottom: 20,
  },
  welcome: {
    textAlign: "center",
    fontSize: 25,
    color: Colores.blanco,
    paddingBottom: 15,
    marginVertical: 15,
    marginHorizontal: 15,
    fontFamily: "Bold",
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    marginTop: 10,
    borderRadius: 150,
  },
  button: {
    backgroundColor: "white",
    marginVertical: 55,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontFamily: "Bold",
  },
});

export default ProQuiz;
