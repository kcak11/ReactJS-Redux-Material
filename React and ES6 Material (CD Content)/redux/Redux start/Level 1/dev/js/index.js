
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

//store is ready
import allReducers from './reducers';
//component
import App from './components/app';

//import store

//step1 : create store
const store=createStore(allReducers);
//import Reducers


//connect store with provider  with app
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



/*

//step 2: create reducer  - create reducers folder in dev/js
//create a file reducer-users.js

//Step 3: add index.js in reducers folder to combine multiple reducers here

//step 4 : create components folder and add App.js (root component)

ReactDOM.render(<h1>welcome</h1>,   
    document.getElementById('root')
);
*/

