import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native';
import React from 'react';
import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      location: 'San Francisco',
    };
  }

  handleUpdateLocation = city => {
    this.setState({location: city,});
  }

  render(){
  
    const { location } = this.state;

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ImageBackground source={getImageForWeather('Clear')} style={styles.imageContainer} imageStyle={styles.image}>

      

      <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
      
          <SearchInput placeholder="Search any city" onSubmit={this.handleUpdateLocation} />
      </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS ==='ios'?'AvenirNext-Regular':'Roboto'
  },
  largeText: {
    fontSize: 44,
  },
  smallText:{
    fontSize: 18,
  },

  imageContainer:{
    flex: 1,
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0,2)',
    paddingHorizontal: 20
  }

});

