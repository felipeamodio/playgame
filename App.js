import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deco from './Deco';
import Form from './Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Deco />
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30,
    color: '#C0C0C0',
    flexGrow: 1,
    marginTop: 180,
    fontWeight: "bold",
  },
});
