import {
  SAVE_CAMPAIGN_REQUEST,
  SAVE_CAMPAIGN_SUCCESS,
  SAVE_CAMPAIGN_FAILURE,
  SAVE_CAMPAIGN_RESET,
} from '../actions/campaign';


const INITIAL_STATE = {
  isSaving: false,
  isSaved: false,
  error: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CAMPAIGN_REQUEST:
      return {
        ...state,
        isSaving: true,
        error: null,
      };
    case SAVE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        isSaving: false,
        isSaved: true,
      };
    case SAVE_CAMPAIGN_FAILURE:
      return {
        ...state,
        isSaving: false,
        hasSaved: false,
        error: action.error,
      };
    case SAVE_CAMPAIGN_RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
