import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import OptionButton from '../components/optionButton';

export default function SaglıkDurumu() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Merhaba</Text>
      <Text style={styles.text}>Bugün nasıl hissediyorsunuz?</Text>
      <OptionButton />
      <OptionButton />
      <OptionButton />
      <OptionButton />
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
