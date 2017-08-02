//Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

//create the component
const Header = () => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>
    </View>
  );
}
const styles = {
  viewStyle: {
    backgroundColor: '#f2f2f2'
  },
  textStyle: {
    fontSize: 60
  }

}
//make the new component available to the other parts of the App
export default Header;
