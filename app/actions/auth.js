import * as api from '../api/auth';
import auth from '../../services/auth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


export function login ({ email, password }) {
  return (dispatch) => {
    return dispatch(_login({ email, password }));
  };
}

export function logout () {
  return (dispatch) => {
    return dispatch(_logout());
  };
}

function _logout () {
  return async dispatch => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
      const data = await auth.logout();
      dispatch({ type: LOGOUT_SUCCESS, data });
    } catch (error) {
      dispatch({ type: LOGOUT_FAILURE, error });
    }
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
