import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import LottieView from "lottie-react-native";

const Background = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require("../assets/Animations/background.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  lottie: {
    height: '101%',
    width: 500
  },
});

export default Background;