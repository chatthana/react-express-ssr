import React from 'react';
import Header from './presentation/Header.jsx';
import Router from './Router.jsx';
import Teaser from './presentation/Teaser.jsx';

export default class App extends React.Component {

  componentWillMount() {
    this.setState({appName: 'Test'});
  }

  clickMe() {
    let c = 1;
    setInterval(() => {
      this.setState({appName: c});
      c++;
    }, 1000)
  }

  render() {
    return (
      <div>
        <Header app_name={this.state.appName} />
        <button onClick={this.clickMe.bind(this)}>Test Me</button>
        <Teaser />
        <Router />
      </div>
    )
  }
}
