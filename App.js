import React, {useState} from 'react';
import { Button, StyleSheet, Text, SafeAreaView, TextInput, FlatList, ListItem} from 'react-native';
import FirstPage from './components/MedicineList';
import MedicineList from './components/MedicineList';
import SecondPage from './components/SecondPage';

export default function App() {
  
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Open up App.js to start working on y</Text>
      
      <FirstPage/>
      <SecondPage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    padding: 50
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
