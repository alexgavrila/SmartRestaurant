import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <ActivityIndicator size={100} color="#0000ff" />
        <Text style={{fontSize: 30,}}>Loading</Text>
      </View>
    );
  }
}

export default Loading;
