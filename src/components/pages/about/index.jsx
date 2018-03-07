import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Personal from './Personal';

export default class About extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about" component={Personal} />
        <Route path="/about/personal" component={Personal} />
      </Switch>
    )
  }
}
