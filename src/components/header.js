//Import libraries for making a component
import React from 'react';
import {Text} from 'react-native';

//create the component
const Header = () => {
  const {textStyle} = styles;
  return <Text style={textStyle}>Albums</Text>;
}
const styles = {
  textStyle: {
    fontSize: 60
  }

}
//make the new component available to the other parts of the App
export default Header;
