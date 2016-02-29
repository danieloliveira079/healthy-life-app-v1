import {
  FETCH_CAMPAIGNS_REQUEST,
  FETCH_CAMPAIGNS_SUCCESS,
  FETCH_CAMPAIGNS_FAILURE,
  INVALIDATE_CAMPAIGN_LIST,
} from '../actions/campaign';


const INITIAL_STATE = {
  isFetching: false,
  items: null,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAMPAIGNS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case FETCH_CAMPAIGNS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        items: action.data,
      };
    }
    case FETCH_CAMPAIGNS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case INVALIDATE_CAMPAIGN_LIST: {
      return {
        ...state,
        items: [],
      };
    }
    default:
      return state;
  }
};
