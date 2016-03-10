import {
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  IMAGE_RESET,
} from '../actions/image';

const INITIAL_STATE = {
  isUploading: false,
  images: [],
  hasUploadedImage: false,
  error: null,
};

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        isUploading: true,
        hasUploadedImage: false,
        error: null,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isUploading: false,
        images: [...state.images].concat([{
          path: action.image.path_lower,
        }]),
        hasUploadedImage: true,
        error: null,
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        isUploading: false,
        hasUploadedImage: false,
        error: action.error,
      };
    case DELETE_IMAGE_REQUEST:
      return {
        ...state,
        hasUploadedImage: false,
      };
    case DELETE_IMAGE_SUCCESS:
      const images = state.images
        .filter(image => image.path !== action.image.path_lower);

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
