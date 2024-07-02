import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AVPlaybackSource, Audio, Video } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import PagerView from "react-native-pager-view";
import Background from "./BackgroundGradient";

const AprenAdul = () => {
  // data.js

  const data = [
    {
      id: "1",
      title: "Phishing",
      description:
        "es una técnica de ciberdelincuencia en la que un atacante intenta engañar a las personas para que revelen información personal y confidencial, como contraseñas, números de tarjetas de crédito o información bancaria. Esto se logra mediante el uso de mensajes de correo electrónico, sitios web falsos, mensajes de texto o llamadas telefónicas que se hacen pasar por entidades legítimas y confiables.",
      image: require("../assets/Img/nubeGrande.png"),
      video: require("../assets/videos/miguel2.mp4"),
      audio: require("../assets/audio/miguel.mp3"),
    },
  ];

  const [sound, setSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async (audio: AVPlaybackSource) => {
    if (!sound) {
      const { sound: audioSound } = await Audio.Sound.createAsync(audio);
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
      {data.map((item) => (
        <Text style={styles.text}>{item.title}</Text>
      ))}
      {data.map((item) => (
        <PagerView style={styles.pagerView} initialPage={0}>
          <View style={styles.page}>
            <Video source={item.video} style={styles.video} useNativeControls />
          </View>
          <View style={styles.page}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </PagerView>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => playSound(data[0].audio)}
          style={styles.button}
        >
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
        {data.map((item) => (
          <Text style={styles.paragraph}>{item.description}</Text>
        ))}
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
