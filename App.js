import React from 'react';
import { Platform, StyleSheet, Text, TextInput, KeyboardAvoidingView, View } from 'react-native';
import SearchInput from './components/SearchInput'
export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavoir="padding">
      <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
      <Text style={[styles.largeText, styles.textStyle]}>Light Cloud</Text>
      <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

    <SearchInput />
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  }, 
  textInput: {
    backgroundColor: '#666',
     color: 'white', 
     height: 40, 
     width: 300, 
     marginTop: 20, 
     marginHorizontal: 20, 
     paddingHorizontal: 10, 
     alignSelf: 'center'
  }
});
