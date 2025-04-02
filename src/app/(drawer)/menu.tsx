import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const MenuScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/ultimatum.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Path of Exile 2</Text>
        <Text style={styles.description}>
          Path of Exile 2 é a sequência do famoso RPG de ação da Grinding Gear
          Games. Com um novo motor gráfico, habilidades reformuladas e um novo
          sistema de classes, promete uma experiência inovadora para os fãs da
          franquia.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#ff4d4d",
    marginBottom: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
});

export default MenuScreen;
