import * as api from '../api/recovery';

export const RECOVERY_REQUEST = 'RECOVERY_REQUEST';
export const RECOVERY_SUCCESS = 'RECOVERY_SUCCESS';
export const RECOVERY_FAILURE = 'RECOVERY_FAILURE';


export function recover ({ email }) {
  return (dispatch) => {
    return dispatch(_recover({ email }));
  };
}

function _recover ({ email }) {
  return async dispatch => {
    dispatch({ type: RECOVERY_REQUEST });
    try {
      const data = await api.recover({
        email,
      });
      dispatch({ type: RECOVERY_SUCCESS, data });
    } catch (error) {
      dispatch({ type: RECOVERY_FAILURE, error });
    }
  };
}
