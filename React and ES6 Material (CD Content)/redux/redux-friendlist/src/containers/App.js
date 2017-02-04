import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
      <h2 className="bg-danger">React - Redux with ES6 and Webpack by Murthy</h2>
      <center>
        <Provider store={store}>
          {() => <FriendListApp /> }
        </Provider>

        {renderDevTools(store)}
        <h2 className='bg-info'>Copyright Reserved</h2> 
        </center>
      </div>
    );
  }
}
