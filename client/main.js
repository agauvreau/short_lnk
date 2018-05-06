import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

const routes = (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/links" component={Link}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);



Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('app'))
})