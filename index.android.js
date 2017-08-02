//ANDROID

//Import a library to help create a component
import React from 'react';
import { AppRegistry} from 'react-native';
import Header from './src/components/header';

//Create a component-- a javascript function that returns jsx
const App = () => (
    <Header headerText={"Albums"}/>
);


//Render component to the device
AppRegistry.registerComponent('albums', () => App);
