import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OptionButton from '../components/optionButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Merhaba</Text>
      <Text style={styles.text}>Bugün nasıl hissediyorsunuz?</Text>
      <OptionButton name='Çok iyiyim.' />
      <OptionButton name='İyiyim, ama biraz halsizim.' />
      <OptionButton name='İyi hissetmiyorum.' />
      <OptionButton name='Halsiz ve hasta hissediyorum.' />
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
