import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Dashboard from './components/dashboard';
import Login from './components/login';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Dashboard} />
		<Route path='dashboard' component={Dashboard} />
		<Route path='login' component={Login} />
	</Route>
);