import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  cartItems: cartReducer,
  loginStatus: loginReducer,
});
