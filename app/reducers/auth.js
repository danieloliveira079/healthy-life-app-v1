import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/auth';


const INITIAL_STATE = {
  error: null,
  loginError: false,
  logoutError: false,
  isFetching: false,
  isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...INITIAL_STATE, loginError: false, isFetching: true };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isLoggedIn: true };
    case LOGIN_FAILURE:
      return { ...state, loginError: true, isFetching: false, error: action.error };
    case LOGOUT_REQUEST:
      return { ...INITIAL_STATE, loginError: false, isFetching: true };
    case LOGOUT_SUCCESS:
      return { ...state, isFetching: false, isLoggedIn: false };
    case LOGOUT_FAILURE:
      return { ...state, logoutError: true, isFetching: false, error: action.error };
    default:
      return state;
  }
};
