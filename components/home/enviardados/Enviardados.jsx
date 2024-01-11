import React from 'react'
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router';

const Enviardados = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style = {styles.buttonText}>Enviar dados</Text>
    </TouchableOpacity>
  )
}

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

export default Enviardados;

