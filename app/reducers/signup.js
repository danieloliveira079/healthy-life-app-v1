import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/signup';


const INITIAL_STATE = {
  error: null,
  signupError: false,
  isFetching: false,
  isSignedUp: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...INITIAL_STATE, signupError: false, isFetching: true };
    case SIGNUP_SUCCESS:
      return { ...state, isFetching: false, isSignedUp: true };
    case SIGNUP_FAILURE:
      return { ...state, signupError: true, isFetching: false, error: action.error };
    default:
      return state;
  }
};
