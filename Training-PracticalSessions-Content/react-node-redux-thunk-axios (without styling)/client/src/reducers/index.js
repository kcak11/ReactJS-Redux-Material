import {combineReducers} from 'redux';
import AuthReducer from './auth_reducer';
import MyReducer from './myreducer';

const rootReducer=combineReducers({
	auth:AuthReducer,
	myreducer:MyReducer
});

export default rootReducer;