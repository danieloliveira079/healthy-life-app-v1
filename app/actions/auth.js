import * as api from '../api/auth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export function login ({ email, password }) {
  return (dispatch) => {
    return dispatch(_login({ email, password }));
  };
}


function _login ({ email, password }) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const data = await api.login({
        email,
        password,
      });
      dispatch({ type: LOGIN_SUCCESS, data });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, error });
    }
  };
}
