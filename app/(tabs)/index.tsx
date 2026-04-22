import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { Link } from 'expo-router';

const PlaceholderImage = require('/assets/images/logo.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <Text style={styles.logo}>Delivery</Text>

      <Link href="/toDoList" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Lista</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/about" asChild>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Sobre</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EA1D2C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#EA1D2C',
    fontSize: 18,
    fontWeight: 'bold',
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },

  secondaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});