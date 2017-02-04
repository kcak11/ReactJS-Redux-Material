import {TEST_ACTION} from '../actions/types';

const INITIAL_STATE={ashish:''};

export default function (state=INITIAL_STATE, action){
	switch(action.type){
		case TEST_ACTION:
			return {ashish:action.payload.message};
	}
	/*return default state if no action matched with type*/
	return state;
}