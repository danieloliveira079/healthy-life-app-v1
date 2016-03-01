import { combineReducers } from 'redux';

import auth from './auth';
import campaignList from './campaign-list';
import campaign from './campaign';
import categoryList from './category-list';


const rootReducer = combineReducers({
  auth,
  campaignList,
  campaign,
  categoryList,
});


export default rootReducer;
