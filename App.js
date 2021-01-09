import React from 'react';
import { Platform, StyleSheet, ImageBackground, Text, TextInput, KeyboardAvoidingView, View } from 'react-native';

import SearchInput from './components/SearchInput'
import getImageForWeather from './utils/getImageForWeather'

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavoir="padding">
      <ImageBackground 
      source={getImageForWeather('Clear')}
      style={styles.imageContainer}
      imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
          <Text style={[styles.largeText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
          <SearchInput placeholder="Search any city" />
        </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto', 
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  }, 
  detailsContainer:{
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20, 
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto', 
    color: 'white'
  },
  imageContainer: {
    flex: 1
  }, 
  image: {
    flex: 1, 
    width: null, 
    height: null, 
    resizeMode: 'cover'
  }
});
