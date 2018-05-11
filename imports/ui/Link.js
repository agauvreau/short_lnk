
import React from 'react';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import {createBrowserHistory} from 'history'

export default class Link extends React.Component {
  onLogout(){
    browserHistory.push('/')
  }
    render(){
      return (
        <div>
          <h1>Your Links</h1>
          <button onClick={this.onLogout.bind(this)}>Logout</button>
          </div>

      );

    }
  }