import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';

import './style.sass';

export default class About extends React.Component {
  render() {
    const baseComponentUrl = this.props.match.path;
    return (
      <Switch>
        <Route exact path={baseComponentUrl} component={Profile} />
      </Switch>
    )
  }
}
