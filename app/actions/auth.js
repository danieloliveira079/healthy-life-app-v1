import * as api from '../api/auth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export function login ({ username, password, schoolId }) {
  return (dispatch) => {
    return dispatch(_login({ username, password, schoolId }));
  };
}


function _login ({ username, password, schoolId }) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const data = await api.login({
        grant_type: 'password',
        username,
        password,
        schoolId,
      });
      dispatch({ type: LOGIN_SUCCESS, data });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, error });
    }
  };
}
