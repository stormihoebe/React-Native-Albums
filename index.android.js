//ANDROID

//Import a library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';


//Create a component-- a javascript function that returns jsx
const App = () => (
  <Text>Some Text</Text>
);
//Render component to the device
AppRegistry.registerComponent('albums', () => App);
