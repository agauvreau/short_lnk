import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import {createBrowserHistory} from 'history'

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const browserHistory = createBrowserHistory();
window.browserHistory = browserHistory;

const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/links" component={Link}/>
      <Route exact path="/" component={Login}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
);



Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('app'))
})