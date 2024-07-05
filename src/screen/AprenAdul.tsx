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
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colores from "../constants/Colores";

const AprenAdul = () => {
  const route = useRoute();
  const { item } = route.params;
  const [sound, setSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(20);

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

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Background />

      <Text style={styles.text}>{item.title}</Text>

      <PagerView style={styles.pagerView} initialPage={0}>
        <View style={styles.page}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.page}>
          <Video
            source={{ uri: item.video }}
            resizeMode="contain"
            style={styles.video}
            useNativeControls
          />
        </View>
      </PagerView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (isPlaying) {
              pauseSound();
            } else {
              playSound({ uri: item.audio });
            }
          }}
          style={[
            styles.button,
            !isPlaying && !item.audio && styles.disabledButton,
          ]}
        >
          <Icon name={isPlaying ? "pause" : "play"} size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={stopSound} style={styles.button}>
          <Icon name="stop" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.text2}>Definición</Text>
        <Text
          adjustsFontSizeToFit
          allowFontScaling={true}
          minimumFontScale={0.5}
          selectable={true}
          suppressHighlighting={true}
          style={[styles.paragraph, { fontSize }]}
        >
          {item.description}
        </Text>
      </ScrollView>

      <TouchableOpacity
        onPress={increaseFontSize}
        style={[styles.floatingButton, styles.increaseButton]}
      >
        <Icon name="plus" size={20} color={Colores.verde} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={decreaseFontSize}
        style={[styles.floatingButton, styles.decreaseButton]}
      >
        <Icon name="minus" size={20} color={Colores.rojo}/>
      </TouchableOpacity>
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
    height: "27%",
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
  text2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffff",
    marginVertical: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
    marginVertical: 10,
  },
  button: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  increaseButton: {
    right: 80,
  },
  decreaseButton: {
    right: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default AprenAdul;
