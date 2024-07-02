import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Audio, Video } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import PagerView from "react-native-pager-view";
import Background from "./BackgroundGradient";

const AprenAdul = () => {
  const [sound, setSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async () => {
    if (!sound) {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        require("../assets/audio/miguel.mp3")
      );
      setSound(audioSound);
    }

    await sound.playAsync();
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    if (sound && isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  const resumeSound = async () => {
    if (sound && !isPlaying) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <Text style={styles.text}>Phishing</Text>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1" style={styles.page}>
          <Video
            source={require("../assets/videos/miguel2.mp4")}
            style={styles.video}
            resizeMode="contain"
            useNativeControls
          />
        </View>
        <View key="2" style={styles.page}>
          <Image
            source={require("../assets/Img/nubeGrande.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </PagerView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={playSound} style={styles.button}>
          <Text style={styles.textos}>Empezar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pauseSound}
          style={[styles.button, !isPlaying && styles.disabledButton]}
        >
          <Text style={styles.textos}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={resumeSound}
          style={[styles.button, isPlaying && styles.disabledButton]}
        >
          <Text style={styles.textos}>Reanudar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopSound} style={styles.button}>
          <Text style={styles.textos}>Terminar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.text}>Definición</Text>
        <Text style={styles.paragraph}>
          Phishing es un término informático que distingue a un conjunto de
          técnicas que persiguen el engaño a una víctima ganándose su confianza
          haciéndose pasar por una persona, empresa o servicio de confianza
          (suplantación de identidad de tercero de confianza), para manipularla
          y hacer que realice acciones que no debería realizar (por ejemplo,
          revelar información confidencial o hacer click en un enlace).1​2​ Para
          realizar el engaño, habitualmente se hace uso de la ingeniería social
          explotando los instintos sociales de la gente,3​ como es de ayudar o
          ser eficiente. También mediante la adulación de la víctima, explotando
          su intrínseca vanidad o necesidad de ser reconocido, baja autoestima,
          o una persona que busca trabajo. Por ejemplo, enviando correos
          electrónicos o mostrando publicidades a la víctima diciéndole que ha
          ganado un premio4​ y que siga un enlace para recibirlo, siendo
          aquellas promesas falsas (un cebo). A veces también se hace uso de
          procedimientos informáticos que aprovechan vulnerabilidades.
          Habitualmente el objetivo es robar información, pero otras veces es
          instalar malware, sabotear sistemas, o robar dinero a través de
          fraudes.5​ El phising está considerada una de las técnicas de robos de
          contraseñas más utilizada.6​ A quien practica el phishing se le llama
          phisher.7​ Dado el creciente número de denuncias de incidentes
          relacionados con el phishing, se requieren métodos adicionales de
          protección. Se han realizado intentos con leyes que castigan la
          práctica y campañas para prevenir a los usuarios con la aplicación de
          medidas técnicas a los programas.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  pagerView: {
    width: "100%",
    height: "30%", // Ajusta según tus necesidades
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 25,
  },
  button: {
    backgroundColor: "white",
    height: 40,
    width: 80,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textos: {
    fontSize: 14,
    color: "black",
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default AprenAdul;
