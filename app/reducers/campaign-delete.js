import {
  DELETE_CAMPAIGN_REQUEST,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAILURE,
  DELETE_CAMPAIGN_RESET,
} from '../actions/campaign';


const INITIAL_STATE = {
  isDeleting: false,
  isDeleted: false,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_REQUEST:
      return {
        ...state,
        isDeleting: true,
        error: null,
      };
    case DELETE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        isDeleted: true,
      };
    case DELETE_CAMPAIGN_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.error,
      };
    case DELETE_CAMPAIGN_RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
