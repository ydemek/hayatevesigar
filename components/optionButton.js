import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

export default function OptionButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.txt}> {props.name} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#54A121',
    marginTop: 29,
    marginHorizontal: 29,
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  txt: {
    color: '#54A121',
  },
});
