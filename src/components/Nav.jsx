import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation" className="clearfix">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/personal">About</Link></li>
        </ul>
      </nav>
    )
  }
}
