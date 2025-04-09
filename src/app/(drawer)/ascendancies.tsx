import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ascendancies = [
  {
    name: "Acolyte of Chayula",
    class: "Monk",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Chayula.webp"),
  },
  {
    name: "Amazon",
    class: "Huntress",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Amazon.jpg"),
  },
  {
    name: "Bloodmage",
    class: "Witch",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Bloodmage.webp"),
  },
  {
    name: "Chronomancer",
    class: "Sorceress",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Chronomancer.webp"),
  },
  {
    name: "Gemling Legionnaire",
    class: "Mercenary",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/gemling.webp"),
  },
  {
    name: "Infernalist",
    class: "Witch",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/infernalist.webp"),
  },
  {
    name: "Invoker",
    class: "Monk",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/invoker.webp"),
  },
  {
    name: "Lich",
    class: "Witch",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Lich.png"),
  },
  {
    name: "Ritualist",
    class: "Huntress",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Primalist.png"),
  },
  {
    name: "Smith of Kitava",
    class: "Warrior",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/SmithofKitava.png"),
  },
  {
    name: "Stormweaver",
    class: "Sorceress",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Stormweaver.webp"),
  },
  {
    name: "Titan",
    class: "Warrior",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/titan.webp"),
  },
  {
    name: "Warbringer",
    class: "Warrior",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Warbringer.webp"),
  },
  {
    name: "Witch Hunter",
    class: "Mercenary",
    description: "A amazon etc etc etc...",
    image: require("../../assets/img/characters/Witch Hunter.webp"),
  },
];

export const AscendanciesScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string>("");

  const filteredAscendancies = ascendancies.filter((ascendancy) => {
    const matchesName = ascendancy.name.toLowerCase().includes(search.toLowerCase());
    const matchesClass = selectedClass ? ascendancy.class === selectedClass : true;
    return matchesName && matchesClass;
  });

  return (
    <ImageBackground source={require("../../assets/img/ultimatum.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Ascendências</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome..."
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        <Picker
          selectedValue={selectedClass}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedClass(itemValue)}
        >
          <Picker.Item label="Todas as Classes" value="" />
          <Picker.Item label="Huntress" value="Huntress" />
          <Picker.Item label="Witch" value="Witch" />
          <Picker.Item label="Monk" value="Monk" />
          <Picker.Item label="Warrior" value="Warrior" />
          <Picker.Item label="Sorceress" value="Sorceress" />
          <Picker.Item label="Mercenary" value="Mercenary" />
        </Picker>

        <FlatList
          data={filteredAscendancies}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => {
            const isExpanded = expandedCard === item.name;

            return (
              <TouchableOpacity
                style={[styles.card, isExpanded && styles.expandedCard]}
                onPress={() => setExpandedCard(isExpanded ? null : item.name)}
              >
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.role}>{item.class}</Text>
                  <Text style={[styles.description, isExpanded && styles.expandedDescription]}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

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
  searchInput: {
    width: "100%",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    marginBottom: 16,
  },
  picker: {
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    marginBottom: 16,
    borderRadius: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    flexDirection: "row",
    width: 320,
    alignItems: "center",
    padding: 10,
  },
  expandedCard: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  role: {
    color: "#ffcc00",
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    color: "#aaa",
    fontSize: 12,
    flexWrap: "wrap",
    maxHeight: 40,
    overflow: "hidden",
  },
  expandedDescription: {
    maxHeight: 330,
    fontSize: 14,
  },
});

export default AscendanciesScreen;
