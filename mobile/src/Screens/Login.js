import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text,Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {login} from '../actions/loginActions';

class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#e74c3c'}}>
        <View style={{flex: 4, alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: '900',
              marginTop: 50,
            }}>
            SmartRestaurant
          </Text>
          <View
            style={{
              marginTop: 50,
              width: 300,
              height: 300,
              borderColor: 'white',
              borderWidth: 5,
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              color: 'white',
              marginTop: 10,
              fontSize: 20,
            }}>
            Scaneaza codul QR
          </Text>
        </View>

        <View style={{backgroundColor: '#c0392b', flex: 1}}>
          <Button title={"Dummy Scan"} onPress={()=>this.props.login({loginStatus:true, loggedInRestaurant:'5ef219967ba5213810aed015'})}/>
          <Button title={"Dummy Scan2"} onPress={()=>this.props.login({loginStatus:true, loggedInRestaurant:'5f40fca0d7d6b83c78685fdf'})}/>
        </View>
      </View>
    );
  }
}


export default connect(
  null,
  {login},
)(Login);