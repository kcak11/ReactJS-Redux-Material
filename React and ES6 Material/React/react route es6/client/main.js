import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


import App from '../components/App';
import Home from '../components/Home';
import Service from '../components/Service';
import Contact from '../components/Contact';

 ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="service" component={Service}>       
      </Route>
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('app'));


