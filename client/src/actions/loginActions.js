import {LOGIN} from './types';

export const login = value => dispatch => {
  dispatch({
    type: LOGIN,
    payload: value,
  });
};
