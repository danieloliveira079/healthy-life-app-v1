import * as api from '../api/campaign';


export const SAVE_CAMPAIGN_REQUEST = 'SAVE_CAMPAIGN_REQUEST';
export const SAVE_CAMPAIGN_SUCCESS = 'SAVE_CAMPAIGN_SUCCESS';
export const SAVE_CAMPAIGN_FAILURE = 'SAVE_CAMPAIGN_FAILURE';
export const SAVE_CAMPAIGN_RESET = 'SAVE_CAMPAIGN_RESET';
export const FETCH_CAMPAIGNS_REQUEST = 'FETCH_CAMPAIGNS_REQUEST';
export const FETCH_CAMPAIGNS_SUCCESS = 'FETCH_CAMPAIGNS_SUCCESS';
export const FETCH_CAMPAIGNS_FAILURE = 'FETCH_CAMPAIGNS_FAILURE';
export const INVALIDATE_CAMPAIGN_LIST = 'INVALIDATE_CAMPAIGN_LIST';
export const DETAIL_CAMPAIGN_REQUEST = 'DETAIL_CAMPAIGN_REQUEST';
export const DETAIL_CAMPAIGN_SUCCESS = 'DETAIL_CAMPAIGN_SUCCESS';
export const DETAIL_CAMPAIGN_FAILURE = 'DETAIL_CAMPAIGN_FAILURE';
export const DETAIL_CAMPAIGN_RESET = 'DETAIL_CAMPAIGN_RESET';


export function fetchCampaigns () {
  return async dispatch => {
    dispatch({ type: FETCH_CAMPAIGNS_REQUEST });
    try {
      const data = await api.fetchCampaigns();
      dispatch({ type: FETCH_CAMPAIGNS_SUCCESS, data });
    } catch (error) {
      dispatch({ type: FETCH_CAMPAIGNS_FAILURE, error });
    }
  };
}

export function fetchCampaignById (id) {
  return async dispatch => {
    dispatch({ type: DETAIL_CAMPAIGN_REQUEST });
    try {
      const data = await api.detail(id);
      dispatch({ type: DETAIL_CAMPAIGN_SUCCESS, data });
    } catch (error) {
      dispatch({ type: DETAIL_CAMPAIGN_FAILURE, error });
    }
  };
}

export function saveCampaign (data, id) {
  return async (dispatch) => {
    dispatch({ type: SAVE_CAMPAIGN_REQUEST });

    try {
      let campaign;

      if (id) {
        campaign = await api.edit(data, id);
      } else {
        campaign = await api.create(data);
      }

      dispatch({ type: SAVE_CAMPAIGN_SUCCESS, campaign });
    } catch (err) {
      if (err.status) {
        const error = {
          message: err.data.error_message,
          error: err.data.error,
        };

        dispatch({ type: SAVE_CAMPAIGN_FAILURE, error });

        return;
      }

      const error = {
        message: err.message,
        error: err.error,
      };
      dispatch({ type: SAVE_CAMPAIGN_FAILURE, error });
    }
  };
}

export function invalidateCampaignList () {
  return { type: INVALIDATE_CAMPAIGN_LIST };
}

export function resetSave () {
  return { type: SAVE_CAMPAIGN_RESET };
}

export function resetDetails () {
  return { type: DETAIL_CAMPAIGN_RESET };
}
