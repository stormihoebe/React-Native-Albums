//Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

//create the component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}
const styles = {
  viewStyle: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'




  },
  textStyle: {
    fontSize: 30
  }

}
//make the new component available to the other parts of the App
export default Header;
