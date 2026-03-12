import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ABRE O BLUELAB
      </Text>
      <Link href="/" style={styles.button}>
        Ir para o menu principal
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e98888ff",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
});