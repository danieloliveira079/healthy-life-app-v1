import * as api from '../api/interval';


export const FETCH_INTERVALS_REQUEST = 'FETCH_INTERVALS_REQUEST';
export const FETCH_INTERVALS_SUCCESS = 'FETCH_INTERVALS_SUCCESS';
export const FETCH_INTERVALS_FAILURE = 'FETCH_INTERVALS_FAILURE';


export function fetchIntervals () {
  return async dispatch => {
    dispatch({ type: FETCH_INTERVALS_REQUEST });
    try {
      const data = api.fetchIntervals();
      dispatch({ type: FETCH_INTERVALS_SUCCESS, data });
    } catch (error) {
      dispatch({ type: FETCH_INTERVALS_FAILURE, error });
    }
  };
}
