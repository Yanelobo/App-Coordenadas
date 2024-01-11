import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const Salvar = ({ fotoHidrometro, inscricaoImovel }) => {
  const salvarFotoLocalmente = async () => {
    try {
      // Adicionar a foto ao rolo da câmera
      await MediaLibrary.saveToLibraryAsync(caminhoDestino);

      console.log('Foto do hidrômetro salva no rolo da câmera:', caminhoDestino);
    } catch (error) {
      console.error('Erro ao salvar foto do hidrômetro no rolo da câmera:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={salvarFotoLocalmente} style={styles.button}>
        <Text style={styles.buttonText}>Salvar Imagens</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Salvar;
