import {
  FETCH_INTERVALS_REQUEST,
  FETCH_INTERVALS_SUCCESS,
  FETCH_INTERVALS_FAILURE,
} from '../actions/interval';


const INITIAL_STATE = {
  isFetching: false,
  items: null,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_INTERVALS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case FETCH_INTERVALS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        items: action.data,
      };
    }
    case FETCH_INTERVALS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
