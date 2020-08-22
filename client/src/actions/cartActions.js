import {NEW_CART_ITEM} from './types';
import {REMOVE_CART_ITEM} from './types';

export const addItemToCart = cartData => dispatch => {
  dispatch({
    type: NEW_CART_ITEM,
    payload: cartData,
  });
};

export const removeItemFromCart = cartData => dispatch => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: cartData,
  });
};
