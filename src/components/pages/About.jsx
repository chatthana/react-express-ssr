import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default class About extends React.Component {
  render() {
    return (
      // <Switch>
      //   <Route exact path="/about" component={Personal} />
      //   <Route path="/about/personal" component={Personal} />
      // </Switch>
      <h1 className="test-title">About Page</h1>
    )
  }
}
