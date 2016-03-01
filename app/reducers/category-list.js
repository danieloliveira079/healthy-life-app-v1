import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/category';


const INITIAL_STATE = {
  isFetching: false,
  items: null,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        items: action.data,
      };
    }
    case FETCH_CATEGORIES_FAILURE: {
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
