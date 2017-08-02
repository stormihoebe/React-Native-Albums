import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component{
  state= {
    albums: []
  };

  componentWillMount(){
    console.log('Componenet will mount')

    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response)=> response.json())
      .then((data)=> this.setState({albums: data}));
  }

  render(){
console.log(this.state.albums);
    return (
      <View>
        <Text>Heyooo</Text>
      </View>
    );
  }
}
export default AlbumList;
