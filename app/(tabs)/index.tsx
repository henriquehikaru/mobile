import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require('@/assets/images/logo.png');

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Text style={styles.logo}></Text>
      </View>

      <View style={styles.footerContainer}>

        <Link href="/cartScreen" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryText}>Ver Carrinho</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/toDoList" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lista de Tarefas</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/about" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>Sobre</Text>
          </TouchableOpacity>
        </Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA1D2C',
    padding: 20,
    justifyContent: 'space-between',
  },

  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },

  footerContainer: {
    width: '100%',
  },

  primaryButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#EA1D2C',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});