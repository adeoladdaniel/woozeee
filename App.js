import React from 'react';
import {View, Text, ImageBackground, StyleSheet } from 'react-native';
import OnboardingScreen from './components/OnboardingScreen';
import Home from './components/Home';
import Profile from './components/Profile';
import Feeds from './components/Feeds';








export default class App extends React.Component{
render(){
  return(
      <OnboardingScreen/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});