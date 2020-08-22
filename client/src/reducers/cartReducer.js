import {NEW_CART_ITEM} from '../actions/types';
import {REMOVE_CART_ITEM} from '../actions/types';

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case NEW_CART_ITEM:
      return [...state, action.payload];
    case REMOVE_CART_ITEM:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
}
