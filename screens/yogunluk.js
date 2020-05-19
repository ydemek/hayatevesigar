import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Toplam iyileşen hasta sayısı',
    value: '11577',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Toplam Test Sayısı',
    value: '1650135',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Toplam Vaka Sayısı',
    value: '150593',
  },
  {
    id: '5ec356c65f384397adacd3bb',
    title: 'Toplam Vefat Saysı',
    value: '4171',
  },
  {
    id: '5ec356c6c522fc0bf1604bdc',
    title: 'Toplam Yoğun Bakım Hasta Sayısı',
    value: '903',
  },
  {
    id: '5ec356c6720d5d6497b0a3ad',
    title: 'Bugün İyileşen Hasta Sayısı',
    value: '1615',
  },
];

function Item({ title, value }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function Yogunluk() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 19,
          fontWeight: 'bold',
          marginTop: 50,
          marginBottom: 30,
          color: '#898C95',
        }}
      >
        Türkiye Günlük Korona Virüs Tablosu
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Item title={item.title} value={item.value} />
            <View style={styles.separater}></View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          marginTop: 50,
          marginBottom: 30,
          color: '#54A121',
        }}
      >
        Son güncelleme: 19.05.2020 07.00
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    //backgroundColor: '#f9c2ff',
    padding: 11,
    marginVertical: 11,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#898C95',
  },
  value: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#54A121',
  },
  separater: {
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
});
