import React from 'react';

import MenuScreen from './Screens/Menu.js';
import CartScreen from './Screens/Cart.js';
import LoadingScreen from './Screens/Loading.js';
import LoginScreen from './Screens/Login.js';

export const Menu = props => {
  return <MenuScreen navigation={props.navigation} route={props.route} />;
};
export const Cart = props => (
  <CartScreen navigation={props.navigation} route={props.route} />
);

export {LoadingScreen, LoginScreen};
