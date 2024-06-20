//====================
// Import React and the dependencies we need to make react router work
//====================
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//====================
// Import the different components that will represent the different pages
// of our website.
//====================
import App from './components/app';
import DashBoard from './components/dashboard';
import Login from './components/login';

//====================
// Define our routes
//====================
export default (
  <Route path='/' component={App}>
    <IndexRoute component={DashBoard} />
    <Route path='dashboard' component={DashBoard} />
    <Route path='login' component={Login} />
  </Route>
);
