import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './app/container/HomeScreen';
import AnimalScreen from './app/container/AnimalScreen';
import NameScreen from './app/container/NameScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Name" component={NameScreen} />
        <Tab.Screen name="Animal" component={AnimalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
