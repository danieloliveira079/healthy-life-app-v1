import { combineReducers } from 'redux';

import auth from './auth';
import campaignList from './campaign-list';


const rootReducer = combineReducers({
  auth,
  campaignList,
});


export default rootReducer;
