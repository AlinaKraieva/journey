import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/mainlogo.png")} />
        <Text style={styles.tagline}>Go Where You Feel Most Alive</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Register"/>
        <Button title="Login"  color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 40,
    width: "100%",
  },
  logo: {
    width: 120,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 170,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;