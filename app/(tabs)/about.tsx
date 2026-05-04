import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Sobre o App</Text>

      <Text style={styles.text}>
        Este aplicativo é um projeto desenvolvido com React Native e Expo,
        inspirado em plataformas de delivery como o iFood.
      </Text>

      <Text style={styles.sectionTitle}>Funcionalidades</Text>

      <Text style={styles.text}>
        • Visualização de telas organizadas{"\n"}
        • Lista de tarefas interativa{"\n"}
        • Carrinho de compras com cálculo automático{"\n"}
        • Aplicação de cupons de desconto{"\n"}
        • Simulação de finalização de pedido
      </Text>

      <Text style={styles.sectionTitle}>Objetivo</Text>

      <Text style={styles.text}>
        O objetivo deste projeto é aplicar conceitos de desenvolvimento mobile,
        organização de componentes, navegação entre telas e personalização visual,
        criando uma experiência semelhante a um aplicativo real de delivery.
      </Text>

      <Text style={styles.sectionTitle}>Tecnologias</Text>

      <Text style={styles.text}>
        • React Native{"\n"}
        • Expo Router{"\n"}
        • JavaScript / TypeScript{"\n"}
        • Componentização e Hooks
      </Text>

      <Link href="/" style={styles.button}> Voltar para Home </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#EA1D2C'
  },

  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },

  button: {
    marginTop: 30,
    textAlign: 'center',
    color: '#EA1D2C',
    fontWeight: 'bold',
    fontSize: 16,
  },
});