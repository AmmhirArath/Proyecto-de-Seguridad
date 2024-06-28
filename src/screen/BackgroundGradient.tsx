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
    flex:1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Background;