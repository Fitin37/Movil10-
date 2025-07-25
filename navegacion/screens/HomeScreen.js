import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Módulo</Text>
        <Text style={styles.description}>
          Desarrollo de componentes para dispositivos móviles
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={styles.buttonText}>Ver Perfil </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E6F0F5', 
  },
  container: {
    flex: 1,
    margin: 20,
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2c3e50', 
  },
  description: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 18,
    color: '#34495e', 
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
