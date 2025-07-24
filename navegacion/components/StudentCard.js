import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StudentCard = ({ name, age, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>Nombre: {name}</Text>
      <Text style={styles.age}>Edad: {age}</Text>
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  card: {
    width: 280,
    padding: 25,
    backgroundColor: '#2c3e50', 
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 10,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 18,
    borderWidth: 3,
    borderColor: '#2980b9', 
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#ecf0f1', 
    textAlign: 'center',
  },
  age: {
    fontSize: 16,
    color: '#bdc3c7',
  },
});
