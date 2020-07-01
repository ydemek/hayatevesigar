import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
//import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import InputButton from '../components/inputButton';
import OptionButton from '../components/optionButton';

export default function Compass() {
  // const [fathersName, onChangeText] = React.useState('Baba Adınız');
  // const [birthDate, onChangeText] = React.useState('Doğum yılınız Ör: 19**');
  return (
    <View style={styles.container}>
      <Text
        style={{
          padding: 20,
          paddingBottom: 30,
          fontSize: 19,
          fontWeight: 'normal',
          color: 'black',
          textAlign: 'center',
        }}
      >
        Bu özelliği kullanabilmek için kayıt olmanız gerekmektedir.
      </Text>
      <Text
        style={{
          paddingBottom: 30,
          fontSize: 15,
          fontWeight: 'bold',
          color: '#54A121',
          textAlign: 'center',
        }}
      >
        Aşağıdaki giriş bilgilerinin eksiksiz ve doğru bilgiler olduğuna emin
        olun.
      </Text>
      <InputButton name='TC Kimlik No / Yabancı No' />
      <InputButton name='Baba Adınız' />
      <InputButton name='Doğum yılınız Ör: 19**' />
      <OptionButton name='Fotoğraf Ekle' />
      <OptionButton name='Kayııt' />
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
