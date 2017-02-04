import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import {Router, hashHistory} from 'react-router';

import reducers from './reducers/index';

//require('./assets/stylesheets/base.scss');
//require('./assets/stylesheets/lemonade.scss');
//require('./assets/stylesheets/navigation.scss');

import routes from './routes';

const createStoreWithMiddleware=applyMiddleware(reduxThunk)(createStore);
const store=createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.querySelectorAll("#app")[0]
);