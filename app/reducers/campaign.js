import {

  DETAIL_CAMPAIGN_REQUEST,
  DETAIL_CAMPAIGN_SUCCESS,
  DETAIL_CAMPAIGN_FAILURE
} from '../actions/campaign';


const INITIAL_STATE = {
  isFetching: false,
  item: null,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAIL_CAMPAIGN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case DETAIL_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        item: action.data,
      };
    }
    case DETAIL_CAMPAIGN_FAILURE: {
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
