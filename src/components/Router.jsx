import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Index from './pages/Index.jsx';
import About from './pages/About.jsx';

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
