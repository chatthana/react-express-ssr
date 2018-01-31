import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav.jsx';

export default class Header extends React.Component {

  componentDidMount() {
    console.log('=== MOUNTED ===');
  }

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
