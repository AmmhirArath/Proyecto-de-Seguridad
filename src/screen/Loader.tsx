import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import LottieView from "lottie-react-native";

const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require("../assets/Animations/loading.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
  lottie: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default AppLoader;