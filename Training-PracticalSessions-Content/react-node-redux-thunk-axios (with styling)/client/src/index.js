/**
 * import dependencies
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';

/**
 * import reducers
 */
import reducers from './reducers/index';

/**
 * import stylesheets
 */
require('./assets/stylesheets/base.scss');
require('./assets/stylesheets/lemonade.scss');
require('./assets/stylesheets/navigation.scss');

/**
 * import applications routes
 */
import routes from './routes';


/**
 * Create stores
 */
 const createStoreWithMiddleware = 
    applyMiddleware(reduxThunk)(createStore);
 const store = createStoreWithMiddleware(reducers);

/*
 To enable debugging for Redux-dev-tool, use below cmd
 const store = createStore(reducer, preloadedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
*/

/**
 * Renders application to the dom
 */
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#app'));
