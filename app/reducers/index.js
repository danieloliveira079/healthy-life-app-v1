import { combineReducers } from 'redux';

import auth from './auth';
import signup from './signup';
import campaignDelete from './campaign-delete';
import campaignDetail from './campaign-detail';
import campaignList from './campaign-list';
import campaignSave from './campaign-save';
import categoryList from './category-list';
import imageDelete from './image-delete';
import imageUpload from './image-upload';
import intervalList from './interval-list';


const rootReducer = combineReducers({
  auth,
  signup,
  campaignDelete,
  campaignDetail,
  campaignList,
  campaignSave,
  categoryList,
  imageDelete,
  imageUpload,
  intervalList,
});


export default rootReducer;
