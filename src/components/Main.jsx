import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Index from './Index.jsx';
import About from './About.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/about' component={About} />
      </Switch>
    )
  }
}
