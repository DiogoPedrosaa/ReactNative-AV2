import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ImageBackground } from "react-native";

const characters = [
  {
    name: "Sorcereress",
    ascension: "Stormweaver, Chronomancer",
    description: "A Feiticeira é uma classe de Inteligência que controla os 3 elementos e os dobra à sua vontade. Use habilidades de fogo poderosas que incendeiam os inimigos, ou use Flame Wall em combinação com Spark ou Fireball para incendiar seus próprios projéteis, adicionando dano adicional. Solte um Comet em seus inimigos, proteja-os com Frost Wall e use outras habilidades de frio para congelá-los no lugar. Ou relâmpagos de arco entre os inimigos, dando choque nos inimigos, tornando-os mais fáceis de derrotar. As habilidades elementais são feitas para combinar com outras magias de elementos diferentes.",
    image: require("../../assets/img/characters/Sorcerer.webp"),
  },
  {
    name: "Warrior",
    ascension: "Warbringer, Titan",
    description: "O Guerreiro é uma classe baseada em Força que se especializa em esmagar inimigos com armas corpo a corpo de grandes dimensões. Sua arma favorita é a Maça, que inclui arquétipos como Slams e Warcries. Mas se você quiser apimentar, ele também pode usar uma variedade de Habilidades de Escudo. Você está fortemente blindado para ajudar a se livrar dos golpes inimigos e sempre pode redirecionar seus ataques no meio do ataque ou desviar do rolamento se precisar desesperadamente se esquivar de um ataque inimigo.",
    image: require("../../assets/img/characters/Warrior.webp"),
  },
  {
    name: "Huntress",
    ascension: "Amazon, Ritualist",
    description: "Uma Caçadora Azmeri persegue seus inimigos, com velocidade e graça. Esta classe de Destreza é especializada em usar Lanças de curto a médio alcance para fornecer controle inigualável sobre o campo de batalha. Lanças são uma classe de arma única que pode atacar tanto corpo a corpo quanto a distância. Ataque um inimigo próximo, então desvencilhe-se antes de lançar a lança e saltar de volta para detoná-la para um grande final. Assim como com o monge, este estilo de jogo é dinâmico e cheio de ação com muitas oportunidades de combinar diferentes habilidades",
    image: require("../../assets/img/characters/Huntress.webp"),
  },
  {
    name: "Mercenary",
    ascension: "Witchhunter, Gemling Legionaire, Tactician",
    description: "A classe Força e Destreza do Path of Exile 2, o Mercenário, se inspira bastante em jogos de tiro em primeira pessoa. Isso levou a um redesenho fundamental de como o movimento é tratado no PoE 2 e à adição de controles WASD. A revelação do Mercenário focou fortemente na mecânica das Bestas no PoE 2. Você pode usar as Habilidades de Besta Burst (Escopeta), Rapid (Rifle de Assalto) ou Power (Rifle de Precisão) com uma variedade de parafusos especiais.",
    image: require("../../assets/img/characters/Mercenary.webp"),
  },
  {
    name: "Monk",
    ascension: "Invoker, Acolyte of Chayula",
    description: "O Monge é uma Classe de Inteligência e Destreza altamente móvel. Ele avança para o combate para atacar os inimigos com seu Quarterstaff antes de executar uma retirada rápida antes que os inimigos possam retaliar.",
    image: require("../../assets/img/characters/Monk.webp"),
  },
  {
    name: "Ranger",
    ascension: "Deadeye, Pathfinder",
    description: "Depois de anos longe, a Ranger explora seus antigos campos de caça. Essas florestas antes familiares ficaram escuras e agora estão cheias de inimigos sinistros. A mestre sobrevivente de Wraeclast retorna em busca de novas presas. Tudo o que é preciso é uma mulher determinada e seu arco para mudar o mundo. Como ela pode atirar enquanto se move, e muitas habilidades com arco têm saltos embutidos, você será capaz de superar facilmente os inimigos. A Ranger usa uma variedade de habilidades com arco focadas em raios, veneno, gelo e físico.",
    image: require("../../assets/img/characters/Ranger.webp"),
  },
  {
    name: "Witch",
    ascension: "Infernalist, Bloodmage, Lich",
    description: "Cercada por seus leais Minions, a Bruxa faz um retorno triunfante à terra que ela anteriormente dobrou à sua vontade. Agora armada com encantamentos ocultos e um exército de minions, ela está aqui para destruir tudo em seu caminho. Use seu Espírito para construir um exército de minions ou ataque os inimigos diretamente por meio de Chaos e Bone Skills. Então amaldiçoe os inimigos para enfraquecê-los e tornar mais fácil derrotar chefes perigosos.",
    image: require("../../assets/img/characters/Witch.webp"),
  },
];

export const CharactersScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/ultimatum.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Personagens</Text>

        <FlatList
          data={characters}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.role}>{item.ascension}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
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
  },
});

export default CharactersScreen;
