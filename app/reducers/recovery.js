import {
  RECOVERY_REQUEST,
  RECOVERY_SUCCESS,
  RECOVERY_FAILURE,
} from '../actions/recovery';


const INITIAL_STATE = {
  error: null,
  recoveryError: false,
  isFetching: false,
  isRecovered: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECOVERY_REQUEST:
      return { ...INITIAL_STATE, recoveryError: false, isFetching: true };
    case RECOVERY_SUCCESS:
      return { ...state, isFetching: false, isRecovered: true };
    case RECOVERY_FAILURE:
      return { ...state, recoveryError: true, isFetching: false, error: action.error };
    default:
      return state;
  }
};
