import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Hesabım() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Merhaba hesabım</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    marginTop: 32,
    textAlign: 'center',
    fontSize: 17,
    color: '#A68686',
  },
});
