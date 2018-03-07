import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';

export default class Header extends React.Component {

  render() {
    let {app_name} = this.props;
    return (
      <header className="nav">
        <div className="wrapper">
          <Link className="logo" to="/"><h4 className="no-margin">{app_name}</h4></Link>
          <Nav />
        </div>
      </header>
    )
  }
}
