import React from 'react';
import Header from './presentation/Header';
import Router from './Router';
import Teaser from './presentation/Teaser';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {appName: 'React Express SSR'}
  }

  render() {
    return (
      <div>
        <Header app_name={this.state.appName} />
        <Teaser />
        <Router />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
