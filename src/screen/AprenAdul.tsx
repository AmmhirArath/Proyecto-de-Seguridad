import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Audio } from "expo-av";

const Inicio = () => {
  const [sound, setSound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/miguel.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (sound && isPlaying) {
      console.log("Pausing Sound");
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function stopSound() {
    if (sound) {
      console.log("Stopping Sound");
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  async function resumeSound() {
    if (sound && !isPlaying) {
      console.log("Resuming Sound");
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
          setIsPlaying(false);
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phishing</Text>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={require("../assets/ProSecure.png")}
      />
      <View style={styles.definitionContainer}>
        <TouchableOpacity onPress={playSound}>
          <Text>Play Sound</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pauseSound} disabled={!isPlaying}>
          <Text>Pause Sound</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resumeSound} disabled={isPlaying}>
          <Text>Resume Sound</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopSound}>
          <Text>Stop Sound</Text>
        </TouchableOpacity>
        <Text style={styles.definitionTitle}>Definición</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
  },
  image: {
    marginTop: 15,
    width: 390,
    height: 280,
    borderRadius: 15,
  },
  definitionContainer: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
});

export default Inicio;
