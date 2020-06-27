import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImgScreen from './src/screens/ImgScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';

export default function App() {
  return (
    <View>
      <HomeScreen />
      {/* <ComponentScreen />
      <ListScreen />
      <ImgScreen /> */}
      {/* <CounterScreen /> */}
      {/* <ColorScreen /> */}
      {/* <SquareScreen /> */}
      <TextScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
