import {
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILURE,
  IMAGE_RESET,
} from '../actions/image';

const INITIAL_STATE = {
  isDeleting: false,
  image: null,
  hasDeletedImage: false,
  error: null,
};

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_IMAGE_REQUEST:
      return {
        ...state,
        isDeleting: true,
        hasDeletedImage: false,
        error: null,
      };
    case DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        image: action.image,
        hasDeletedImage: true,
        error: null,
      };
    case DELETE_IMAGE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        hasDeletedImage: false,
        error: action.error,
      };
    case IMAGE_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
