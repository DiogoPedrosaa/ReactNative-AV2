import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native";

export const BuildsScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/ultimatum.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>META BUILDS</Text>

        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {builds.map((build, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={build.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{build.title}</Text>
                <Text style={styles.author}>By {build.author}</Text>
                <View style={styles.tags}>
                  {build.tags.map((tag, idx) => (
                    <Text key={idx} style={styles.tag}>
                      {tag}
                    </Text>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const builds = [
  {
    title: "Deadeye granadinhas de gás",
    author: "FicaFlinstonsgamer",
    tags: ["Early Access", "Leveling", "Ranger", "Deadeye"],
    image: require("../../assets/img/characters/deadeye.webp"),
  },
  {
    title: "Titan Terremoto",
    author: "HorrorGames",
    tags: ["Early Access", "Leveling", "Warrior", "Titan"],
    image: require("../../assets/img/characters/titan.webp"),
  },
  {
    title: "Esqueletinhos de raio Infernalist",
    author: "NegoKush",
    tags: ["Early Access", "Endgame", "Witch", "Infernalist"],
    image: require("../../assets/img/characters/infernalist.webp"),
  },
  {
    title: "Gemling stack de atributos",
    author: "MaxdoAçai",
    tags: ["Early Access", "Endgame", "Mercenary", "Gemling", "Expensive"],
    image: require("../../assets/img/characters/gemling.webp"),
  },
  {
    title: "Invoker clear velocidade",
    author: "AdailtonCorredor",
    tags: ["Early Access", "Endgame", "Monk", "Invoker"],
    image: require("../../assets/img/characters/invoker.webp"),
  },
];

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center", 
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16, 
    marginTop: 26,
  },
  cardsContainer: {
    flexGrow: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    flexDirection: "row",
    width: 320,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardContent: {
    flex: 1,
    padding: 8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  author: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 8,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#333",
    color: "#fff",
    fontSize: 10,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
});

export default BuildsScreen;