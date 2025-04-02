import { Image } from "@rneui/base";
import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import { Icon } from "react-native-elements";

export const AtlasScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/ultimatum.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/Atlas.png")}
          style={styles.logo}
        />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Atlas dos Mundos</Text>
            <Text style={styles.paragraph}>
              O Atlas dos Mundos é um mapa em constante expansão, onde a morte é
              extremamente punitiva. Se você morrer em uma área perigosa durante
              sua exploração, você perderá todo o objetivo extra daquele nó e
              terá que repeti-lo novamente.{"\n\n"}
              Para entrar na zona você precisa de itens especiais chamados
              Waystones. Eles são fabricáveis ​​e possuem níveis específicos
              anexados a eles, o que torna a área mais perigosa e mais
              recompensadora.{"\n\n"}
              Você pode usar outro consumível, Tablets, em torres precursoras,
              para personalizar ainda mais o conteúdo que você executa.
            </Text>
            <Text style={styles.subtitle}>Destaques:</Text>
            <Text style={styles.bullet}>
              • Chefes - Muito desafiadores e gratificantes.{"\n"}
              • Torres Precursoras - Revela uma grande área e permite buffar as
              zonas vizinhas usando Tablets.{"\n"}
              • Mecânica da Liga - Encontros únicos no final do jogo.{"\n"}
              • Corrupção de Bestas - Zonas especiais com modificadores
              corrompidos.{"\n"}
              • Esconderijos - Sua casa longe de casa.{"\n"}
              • Nameless Seer - Oferece 1 item exclusivo gratuitamente.{"\n"}
              • Cidades - Encontre itens específicos escondidos na cidade.{"\n"}
              • Mapas especiais como Untainted Paradise, que oferecem uma grande
              quantidade de experiência ou outras recompensas exclusivas.
            </Text>
            <View style={styles.mechanicsContainer}>
          <Text style={styles.sectionTitle}>MECÂNICAS DE LIGA</Text>
          {mechanicsData.map((mechanic, index) => (
            <View style={styles.mechanicItem} key={index}>
              <Image source={mechanic.icon} style={styles.icon} />
              <View style={styles.textWrapper}>
                <Text style={styles.mechanicTitle}>{mechanic.title}</Text>
                <Text style={styles.mechanicDescription}>
                  {mechanic.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};


const mechanicsData = [
    {
      icon: require("../../assets/img/mechanicsicon/BossIcon.png"), 
      title: "Boss",
      description: "Esse mapa possui um boss unico com drops poderosos, é necessario derrota-lo para completar o mapa.",
    },

    {
      icon: require("../../assets/img/mechanicsicon/BreachIcon.png"),
      title: "Breach",
      description:
        "Mãos misteriosas irão aparecer pelo mapa, ande sobre elas para iniciar uma grande invasão demoniaca.",
    },

    {
      icon: require("../../assets/img/mechanicsicon/CorruptionIcon.png"),
      title: "Corruption",
      description:
        "Esse mapa contem modificadores extras, elevando seu nivel de monstros em mais um, ao matar monstros no mapa há uma chance de 30% de invocar um servo do inferno.",
    },
    
    {
        icon: require("../../assets/img/mechanicsicon/DeliriumIcon.png"), 
        title: "Delirium",
        description: "Uma nevoa misteriosa toma conta do mapa, gerando inimigos poderosos e aumentando a densidade de monstros, a nevoa ira desaparecer após algum tempo, derrote os inimigos para ganhar recompensas. Adicionar destilados de Delirium em suas waystones colocam o poder da nevoa em seus mapas. ",
    },

    {
        icon: require("../../assets/img/mechanicsicon/ExpeditionIcon.png"),
        title: "Expedition",
        description:
          "Utilize explosivos para ajudar os exploradores a cavarem os tesouros escondidos nos mapas, podendo ganhar recompensas incriveis e Livros de Expedição que permitem ingressar em mapas completamente inóspitos.",
    },

    {
        icon: require("../../assets/img/mechanicsicon/RitualIcon.png"),
        title: "Ritual",
        description:
          "Altares de ossos irão aparecer durante o mapa, interaja com eles para começar um ritual. Completar rituais lhe garante pontos de tributos, utilize seus tributos nos ritual completos para comprar itens totalmente aleatorios da loja de tributos",
    },
  ];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
      },
  background: {
    width: "100%",
    height: "100%",
  },
  scrollContent: {
    padding: 20,
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "white",
    lineHeight: 22,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    color: "white",
    lineHeight: 24,
  },
  mechanicsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  mechanicItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
  },
  mechanicTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  mechanicDescription: {
    fontSize: 14,
    color: "white",
    lineHeight: 20,
  },
});

export default AtlasScreen;
