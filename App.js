import React from 'react';
import { StyleSheet,  View, StatusBar } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
      />
      <Title></Title>
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 80,
  }
});
