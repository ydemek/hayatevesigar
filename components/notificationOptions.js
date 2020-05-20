import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function NotificationOption() {
  return (
    <View style={styles.container}>
      <FontAwesome
        style={styles.icons}
        name='bluetooth-b'
        size={25}
        color='#54A121'
      />
      <Text style={styles.txt}>Bluetooth Bağlantısı</Text>
      <MaterialCommunityIcons
        style={styles.icons}
        name='help-circle-outline'
        size={40}
        color='#54A121'
      />
      <MaterialCommunityIcons
        style={styles.icons}
        name='toggle-switch'
        size={30}
        color='#54A121'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    marginHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    marginHorizontal: 15,
    alignSelf: 'center',
    color: '#898C95',
  },
  icons: {
    //marginLeft: 40,
    alignSelf: 'center',
  },
});
