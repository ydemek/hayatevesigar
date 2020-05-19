// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
//import { SafeAreaView } from '@react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Ionicons } from '@expo/vector-icons';
import SaglıkDurumu from './screens/saglıkDurumu';
import Yogunluk from './screens/yogunluk';
import { FontAwesome } from '@expo/vector-icons';
import DailyDatas from './screens/yogunluk';
const Tab = createBottomTabNavigator();

function HomeScreen({ route, navigation }) {
  if (route.name == 'Sağlık Durumu') {
    return <SaglıkDurumu />;
  } else {
    return <Yogunluk />;
  }
}
/* function ShowNumbers({ route, navigation }) {
  return <Yogunluk />;
} */
const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Sağlık Durumu'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconname;
              switch (route.name) {
                case 'Sağlık Durumu':
                  iconname = 'heartbeat';
                  break;
                case 'Yoğunluk':
                  iconname = 'compass';
                  break;
                case 'Yakınlarım':
                  iconname = 'users';
                  break;
                case 'Hesabım':
                  iconname = 'user';
                  break;
              }
              return <FontAwesome name={iconname} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name='Sağlık Durumu' component={HomeScreen} />
          <Tab.Screen name='Yoğunluk' component={HomeScreen} />
          <Tab.Screen name='Yakınlarım' component={HomeScreen} />
          <Tab.Screen name='Hesabım' component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
