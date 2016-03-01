import * as api from '../api/category';


export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';


export function fetchCategories () {
  return async dispatch => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });
    try {
      const data = api.fetchCategories();
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, data });
    } catch (error) {
      dispatch({ type: FETCH_CATEGORIES_FAILURE, error });
    }
  };
}
