import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NotificationOption from '../components/notificationOptions';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ad Soyad',
    value: 'John Doe',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Cinsiyet',
    value: 'Male',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Yaş',
    value: '24',
  },
];

function Item({ title, value }) {
  return (
    <View style={styles.item}>
      <Text style={styles.optionFloorText}>
        {title}: {value}
      </Text>
    </View>
  );
}
export default function Hesabım() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 35 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Item title={item.title} value={item.value} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.optionFloor}>
        <Text style={styles.optionFloorText}>AYARLAR</Text>
      </View>
      <NotificationOption />
      <NotificationOption />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  optionFloor: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    height: 43,
    alignItems: 'center',
  },
  optionFloorText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#898C95',
  },
  item: {
    /*  flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', */
  },
});
