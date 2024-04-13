import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const LoadUp = () => {
  return (
    <View style={styles.loadUp1}>
      <View style={styles.loadUp11} />
      <Image
        style={styles.img20240311Wa00041Icon}
        contentFit="cover"
        source={require("../assets/Logos/IMG-20240311-WA0004.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadUp11: {
    top: 0,
    left: 0,
    backgroundColor: "#8093f1",
    width: 360,
    overflow: "hidden",
    position: "absolute",
    height: 800,
  },
  img20240311Wa00041Icon: {
    top: 289,
    left: 27,
    width: 307,
    height: 222,
    position: "absolute",
  },
  loadUp1: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default LoadUp;
