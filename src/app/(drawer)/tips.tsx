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
  Linking,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

// Função para extrair o ID do vídeo de uma URL do YouTube
const getYoutubeVideoId = (url: string): string => {
  // Padrões de URL do YouTube
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return "";
};

// Lista de vídeos de dicas e truques
const videoTips = [
  {
    name: "Build Amazon Lightining Spear EndGame",
    author: "Fubgun",
    type: "Guia de Build",
    description: "Tutorial do famoso youtube Fubgun sobre uma das melhores builds de amazon dessa nova liga",
    youtubeUrl: "https://www.youtube.com/watch?v=uVtQdbv4XrQ&Q",
  },
  {
    name: "Farm utilizando delirium na liga Dawn of The Hunt",
    author: "MalakaTV",
    type: "Guia de Farm EndGame",
    description: "Aprenda a tirar o maximo de proveito dos tablets unicos, uma das melhores mecanicas para farm implementadas na liga.",
    youtubeUrl: "https://www.youtube.com/watch?v=aRJ_VFCsCoE&t",
  },
  {
    name: "Build de Minions Storm Mage EndGame",
    author: "Neemeses",
    type: "Guia de Build",
    description: "Nesse video neeemeses mostra uma build de minions storm mage para liga dawn of the hunt, utilizando varios outros minions para buffar o dps do StormMage.",
    youtubeUrl: "https://www.youtube.com/watch?v=plw8twUKb1g&t",
  },
];

const YouTipScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");

  const filteredVideos = videoTips.filter((video) => {
    const matchesName = video.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType ? video.type === selectedType : true;
    return matchesName && matchesType;
  });

  const handleShare = async (item: typeof videoTips[0]) => {
    try {
      await Share.share({
        title: "Compartilhar Dica de Jogo",
        message: `Video: ${item.name}\nAutor: ${item.author}\nTipo: ${item.type}\nDescrição: ${item.description}\nAssista em: ${item.youtubeUrl}`,
      });
    } catch (error) {
      console.log("Erro ao compartilhar:", error);
    }
  };

  const openYoutubeLink = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Não foi possível abrir o URL: " + url);
      }
    });
  };

  const uniqueTypes = Array.from(new Set(videoTips.map((video) => video.type)));

  return (
    <ImageBackground source={require("../../assets/img/ultimatum.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Dicas e Truques</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por título..."
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        <Picker
          selectedValue={selectedType}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
        >
          <Picker.Item label="Todos os Tipos" value="" />
          {uniqueTypes.map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>

        <FlatList
          data={filteredVideos}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => {
            const isExpanded = expandedCard === item.name;
            const videoId = getYoutubeVideoId(item.youtubeUrl);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <View style={[styles.card, isExpanded && styles.expandedCard]}>
                <TouchableOpacity 
                  onPress={() => openYoutubeLink(item.youtubeUrl)}
                  style={styles.thumbnailContainer}
                >
                  <Image 
                    source={{ uri: thumbnailUrl }} 
                    style={styles.cardImage} 
                    defaultSource={require("../../assets/img/thumbnail_placeholder.jpg")}
                  />
                  <View style={styles.playButton}>
                    <Text style={styles.playIcon}>▶</Text>
                  </View>
                </TouchableOpacity>
                
                <View style={styles.cardContent}>
                  <TouchableOpacity onPress={() => setExpandedCard(isExpanded ? null : item.name)}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={[styles.description, isExpanded && styles.expandedDescription]}>
                      {item.description}
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => handleShare(item)} style={styles.shareButton}>
                      <Text style={styles.shareText}>Compartilhar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      onPress={() => openYoutubeLink(item.youtubeUrl)} 
                      style={styles.watchButton}
                    >
                      <Text style={styles.watchText}>Assistir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
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
  thumbnailContainer: {
    position: "relative",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#333", // Cor de fundo enquanto carrega
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -15,
    marginTop: -15,
    width: 30,
    height: 30,
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    color: "#fff",
    fontSize: 16,
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
  author: {
    color: "#ff9900",
    fontSize: 14,
    marginBottom: 2,
  },
  type: {
    color: "#66ccff",
    fontSize: 12,
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  shareButton: {
    backgroundColor: "#25D366", // cor do WhatsApp
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  shareText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  watchButton: {
    backgroundColor: "#FF0000", // cor do YouTube
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  watchText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default YouTipScreen;