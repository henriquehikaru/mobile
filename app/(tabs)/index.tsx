import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import ImageViewer from '@/components/ImageViewer';

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('@/assets/images/logo.png');

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>

        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />

      </View>

      <View style={styles.footerContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={pickImageAsync}
        >
          <Text style={styles.buttonText}>
            Escolher imagem
          </Text>
        </TouchableOpacity>

        <Link href="/cartScreen" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryText}>
              Ver Carrinho
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/toDoList" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Lista de Tarefas
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/about" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>
              Sobre
            </Text>
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