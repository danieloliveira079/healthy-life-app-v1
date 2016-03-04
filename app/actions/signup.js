import * as api from '../api/signup';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


export function signup ({ email, password }) {
  return (dispatch) => {
    return dispatch(_signup({ email, password }));
  };
}

function _signup ({ email, password }) {
  return async dispatch => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
      const data = await api.signup({
        email,
        password,
      });
      dispatch({ type: SIGNUP_SUCCESS, data });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, error });
    }
  };
}
