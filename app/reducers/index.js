import { combineReducers } from 'redux';

import auth from './auth';
import campaignList from './campaign-list';
import campaign from './campaign';


const rootReducer = combineReducers({
  auth,
  campaignList,
  campaign
});


export default rootReducer;
