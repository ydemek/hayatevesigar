import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

export default function InputButton(props) {
  const [value, onChangeText] = React.useState('');
  return (
    <TextInput
      style={styles.input}
      label='Emails'
      placeholder={props.name}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    //width: 300,
    fontSize: 17,
    color: '#898C95',
    alignSelf: 'stretch',
    height: 44,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    //backgroundColor: '#ecf0f1',
    borderBottomColor: '#898C95',
    borderBottomWidth: 0.5,
  },
});
