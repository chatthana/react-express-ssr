import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Index from './pages/home';
import About from './pages/about';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/about' component={About} />
      </Switch>
    )
  }
}
