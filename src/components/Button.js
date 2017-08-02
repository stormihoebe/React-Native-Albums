//Import libraries for making a component
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//create the component
const Button = () => {

  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Click</Text>
    </TouchableOpacity>
  );
}
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth:1,
    borderRadius: 4,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }

}
//make the new component available to the other parts of the App
export default Button;
