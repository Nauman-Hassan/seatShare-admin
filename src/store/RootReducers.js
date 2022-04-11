import { combineReducers } from 'redux';
import AllUserReducer from './reducers/UserReducer';
import AllAdsReducer from "./reducers/AdsReducer"
import DashboardReducer from "./reducers/DashboardReducer"
import AuthReducer from "./reducers/AuthReducer"

const rootReducer = combineReducers({
  AllUserReducer,
  AllAdsReducer,
  DashboardReducer,
  AuthReducer,
});
export default rootReducer;