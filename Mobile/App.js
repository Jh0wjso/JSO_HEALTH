import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  SafeAreaView, ScrollView } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' backgroundColor='transparent'/>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B8B',
    paddingTop: 80,
  }
});
