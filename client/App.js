import React, {Component} from 'react';

import store from './store';
import {Provider} from 'react-redux';
import {Text} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {Menu, Cart, LoadingScreen, LoginScreen} from './src/index';

const Stack = createStackNavigator();
const ip = '192.168.0.101';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      menu: [],
    };
  }

  async getMenu() {
    const restaurantId = '5ef219967ba5213810aed015';
    // fetch('http://' + ip + ':3000/api/category/' + restaurantId)
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       menu: json,
    //     });
    //     return json;
    //   })
    //   .catch(err => console.log(err));

    fetch('http://' + ip + ':3000/api/restaurant/' + restaurantId)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoading: false,
          menu: json,
        });
        return json;
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.props.isLoggedIn && this.state.isLoading) {
      this.getMenu();
      return <LoadingScreen />;
    }

    return (
      <>
        {this.props.isLoggedIn ? (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen
                name="Menu"
                component={Menu}
                initialParams={{menu: this.state.menu}}
              />
              <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <>
            <LoginScreen />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginStatus.loginStatus,
});

export default connect(mapStateToProps)(App);
