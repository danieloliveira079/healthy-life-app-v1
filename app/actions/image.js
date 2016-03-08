import * as api from '../api/image';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';
export const DELETE_IMAGE_REQUEST = 'DELETE_IMAGE_REQUEST';
export const DELETE_IMAGE_SUCCESS = 'DELETE_IMAGE_SUCCESS';
export const DELETE_IMAGE_FAILURE = 'DELETE_IMAGE_FAILURE';
export const IMAGE_RESET = 'IMAGE_RESET';

export function uploadImage (data) {
  return async (dispatch) => {
    dispatch({ type: UPLOAD_IMAGE_REQUEST });

    try {
      const image = await api.uploadImage(data);
      dispatch({ type: UPLOAD_IMAGE_SUCCESS, image });
    } catch (err) {
      dispatch({ type: UPLOAD_IMAGE_FAILURE, err });
    }
  };
}

export function deleteImage (path) {
  return async (dispatch) => {
    dispatch({ type: DELETE_IMAGE_REQUEST });

    try {
      const image = await api.deleteImage(path);
      dispatch({ type: DELETE_IMAGE_SUCCESS, image });
    } catch (err) {
      dispatch({ type: DELETE_IMAGE_FAILURE, err });
    }
  };
}

export function resetImages () {
  return async (dispatch) => {
    dispatch({ type: IMAGE_RESET });
  };
}
