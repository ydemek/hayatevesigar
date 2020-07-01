import * as React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import Density from './screens/density';
import Compass from './screens/compass';
import Account from './screens/account';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Ana Sayfa'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused = false, color, size }) => {
              let iconname;
              switch (route.name) {
                case 'Ana Sayfa':
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
          <Tab.Screen name='Ana Sayfa' component={HomeScreen} />
          <Tab.Screen name='Yoğunluk' component={Density} />
          <Tab.Screen name='Yakınlarım' component={Compass} />
          <Tab.Screen name='Hesabım' component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
