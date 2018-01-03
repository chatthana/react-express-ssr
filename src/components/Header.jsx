import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className="nav">
        <div className="wrapper">
          <Link className="logo" to="/"><h4 className="no-margin">Rexpress</h4></Link>
          <Nav />
        </div>
      </header>
    )
  }
}
