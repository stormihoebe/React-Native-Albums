//ANDROID

//Import a library to help create a component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//Create a component-- a javascript function that returns jsx
const App = () => (
    <View>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
);


//Render component to the device
AppRegistry.registerComponent('albums', () => App);
