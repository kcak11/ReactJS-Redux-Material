import { combineReducers } from 'redux';

/**
 * import our reducers here
 */
import AuthReducer from './auth_reducer';

/**
 * combine the reducers
 */
 const rootReducer = combineReducers({
   auth: AuthReducer,
 });

 export default rootReducer;
