import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/auth';


const INITIAL_STATE = {
  schools: [],
  errors: {},
  error: null,
  loginError: false,
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
    default:
      return state;
  }
};
