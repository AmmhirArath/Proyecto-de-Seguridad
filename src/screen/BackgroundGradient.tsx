import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import LottieView from "lottie-react-native";

const Background = () => {
  const { width, height } = useWindowDimensions();
  const scaleFactor = 1.5;

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Animations/background.json")}
        autoPlay
        loop
        style={[styles.lottie, { width: width * scaleFactor, height: height * scaleFactor }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  lottie: {

  },
});

export default Background;
