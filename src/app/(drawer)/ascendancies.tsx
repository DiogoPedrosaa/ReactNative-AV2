import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Share,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { Image as RNImage } from "react-native";



const ascendancies = [
  {
    name: "Acolyte of Chayula",
    class: "Monk",
    description: "Um ascendente que canaliza os poderes das trevas de Chayula. Troca seu Espírito por Escuridão, um recurso alternativo que absorve dano e pode ser aprimorado para fornecer bônus adicionais. Pode caminhar pela Brecha, onde as chamas de Chayula o fortalecem.",
    image: require("../../assets/img/characters/Chayula.webp"),
  },
  {
    name: "Amazon",
    class: "Huntress",
    description: "Uma especialista em ataques precisos, focada em golpes críticos e feridas profundas que causam sangramento em seus inimigos. Combina ataques corpo a corpo e à distância com grande mobilidade, utilizando sua lança com maestria e letalidade.",
    image: require("../../assets/img/characters/Amazon.jpg"),
  },
  {
    name: "Bloodmage",
    class: "Witch",
    description: "Uma maga que utiliza sua própria vida como recurso para lançar magias poderosas. Cada habilidade custa uma porcentagem de vida e mana, mas em troca, inimigos derrotados deixam remanescentes de vida que permitem recuperar a saúde perdida e amplificar seu poder.",
    image: require("../../assets/img/characters/Bloodmage.webp"),
  },
  {
    name: "Chronomancer",
    class: "Sorceress",
    description: "Uma feiticeira que manipula o tempo e o espaço. Pode congelar instantaneamente hordas de inimigos, parar o tempo ou até mesmo revertê-lo quando as coisas dão errado. Tem a habilidade de se teletransportar para posições anteriores, restaurando vida e mana.",
    image: require("../../assets/img/characters/Chronomancer.webp"),
  },
  {
    name: "Gemling Legionnaire",
    class: "Mercenary",
    description: "Um guerreiro que incorpora gemas diretamente em sua carne, obtendo benefícios extras dos atributos, qualidade e níveis das gemas. Esta fusão com as gemas proporciona aprimoramentos únicos, aumentando seu dano e capacidade de sobrevivência.",
    image: require("../../assets/img/characters/gemling.webp"),
  },
  {
    name: "Infernalist",
    class: "Witch",
    description: "Uma bruxa especializada em magia de fogo que pode invocar um Cão Infernal como companheiro leal e se transformar em uma forma demoníaca. Esta transformação aumenta significativamente seu dano e mobilidade, mas a um custo: sofre dano ao longo do tempo.",
    image: require("../../assets/img/characters/infernalist.webp"),
  },
  {
    name: "Invoker",
    class: "Monk",
    description: "Um monge em sintonia com os elementos, capaz de liberar ondas de poder elemental a cada golpe crítico. Especializado em dano de gelo ou relâmpago, pode se transformar em um Avatar Desencadeado para aumentar seu dano e infligir mais aflições elementais.",
    image: require("../../assets/img/characters/invoker.webp"),
  },
  {
    name: "Lich",
    class: "Witch",
    description: "Uma necromante que domina a arte de comandar os mortos. Seu exército de cadáveres obedece a comandos específicos, tornando-os mais eficazes do que simples servos sem mente. Manipula energias ocultas para fortalecer seus lacaios e enfraquecer inimigos.",
    image: require("../../assets/img/characters/Lich.png"),
  },
  {
    name: "Ritualist",
    class: "Huntress",
    description: "Uma praticante das artes sombrias dos Azmeri que infecta inimigos com Fervor Corrupto, criando feridas que espalham Sangue Corrompido quando a vítima morre. Possui grande capacidade de regeneração, podendo se recuperar rapidamente de ferimentos graves.",
    image: require("../../assets/img/characters/Primalist.png"),
  },
  {
    name: "Smith of Kitava",
    class: "Warrior",
    description: "Um guerreiro que forja sua própria armadura corporal, escolhendo entre modificadores poderosos. Reduz a necessidade de resistências em equipamentos e se torna extremamente resistente a danos elementais, servindo como base para uma variedade de estilos de combate.",
    image: require("../../assets/img/characters/SmithofKitava.png"),
  },
  {
    name: "Stormweaver",
    class: "Sorceress",
    description: "Uma feiticeira elemental que tece magia de relâmpago em seus feitiços. Domina a arte de aplicar diferentes tipos de dano com múltiplos projéteis, maximizando o poder de magias elementais e se beneficiando de sinergias com Arcane Surge e Mind Over Matter.",
    image: require("../../assets/img/characters/Stormweaver.webp"),
  },
  {
    name: "Titan",
    class: "Warrior",
    description: "Um guerreiro que se especializa em golpes lentos e poderosos com alta capacidade defensiva. Pode invocar tremores secundários de seus ataques e atordoar facilmente os inimigos, preparando-os para receber dano ainda maior em um ciclo devastador.",
    image: require("../../assets/img/characters/titan.webp"),
  },
  {
    name: "Warbringer",
    class: "Warrior",
    description: "Um guerreiro que canaliza o poder de seus ancestrais Karui e Ezomyte em batalha. Invoca espíritos ancestrais através de totens, faz seus inimigos explodirem e pode revestir seu corpo com jade para absorver dano até que se quebre. Especialista em quebrar armaduras.",
    image: require("../../assets/img/characters/Warbringer.webp"),
  },
  {
    name: "Witch Hunter",
    class: "Mercenary",
    description: "Um caçador especializado em rastrear e eliminar usuários de magia. Utiliza crossbows e armadilhas para neutralizar seus alvos, com habilidades que contrariam feitiços e magias. Combina ataques precisos com venenos e técnicas que suprimem poderes arcanos.",
    image: require("../../assets/img/characters/Witch Hunter.webp"),
  },
];

const AscendanciesScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string>("");

  const filteredAscendancies = ascendancies.filter((ascendancy) => {
    const matchesName = ascendancy.name.toLowerCase().includes(search.toLowerCase());
    const matchesClass = selectedClass ? ascendancy.class === selectedClass : true;
    return matchesName && matchesClass;
  });

  const handleShare = async (item: typeof ascendancies[0]) => {
    try {
      const imageUri = RNImage.resolveAssetSource(item.image).uri;
  
      await Share.share({
        title: "Compartilhar Ascendência",
        message: `Nome: ${item.name}\nClasse: ${item.class}\nDescrição: ${item.description}\n${imageUri}`,
      });
    } catch (error) {
      console.log("Erro ao compartilhar:", error);
    }
  };

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

                  <TouchableOpacity onPress={() => handleShare(item)} style={styles.shareButton}>
                    <Text style={styles.shareText}>Compartilhar</Text>
                  </TouchableOpacity>
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
  shareButton: {
    marginTop: 10,
    backgroundColor: "#25D366", // cor do WhatsApp
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  shareText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default AscendanciesScreen;