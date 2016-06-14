import React from 'react';
import ReactDOM from 'react-dom';
require('./app/assets/styles/base.scss');
import { Router, Route, useRouterHistory, browserHistory } from 'react-router';
import Home from './app/views/Home';

ReactDOM.render ((
 <Router history={browserHistory}>
   <Route path="/" component={Home} />
 </Router>
), document.getElementById('container'));
