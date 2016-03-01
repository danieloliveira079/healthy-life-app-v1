import { combineReducers } from 'redux';

import auth from './auth';
import campaignList from './campaign-list';
import campaign from './campaign';
import categoryList from './category-list';
import intervalList from './interval-list';


const rootReducer = combineReducers({
  auth,
  campaignList,
  campaign,
  categoryList,
  intervalList,
});


export default rootReducer;
