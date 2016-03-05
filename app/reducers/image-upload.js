import {
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  DELETE_IMAGE_SUCCESS,
  IMAGE_RESET,
} from '../actions/image';

const INITIAL_STATE = {
  isUploading: false,
  images: [],
  error: null,
};

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        isUploading: true,
        error: null,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isUploading: false,
        images: [...state.images].concat(action.image),
        error: null,
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        isUploading: false,
        error: action.error,
      };
    case DELETE_IMAGE_SUCCESS:
      const images = state.images
        .filter(image => image.path_display !== action.image.path_display);

      return {
        ...state,
        images,
      };
    case IMAGE_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
