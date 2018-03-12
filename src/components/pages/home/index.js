import React from 'react';
import {Link} from 'react-router-dom';

export default class Index extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="grid-desktop-6" style={{textAlign: 'center', margin: '0 auto', float: 'none'}}>
            <h3>The Profile</h3>
            <p>
              This is a React application that aims to work on both server and client.
              So that the developers/users can develop React applications that are SEO-friendly,
              support all digital marketing campaigns, and respond very well for business needs
            </p>
            <Link to="/about" className="button red">View Details</Link>
          </div>
        </div>
      </div>
    )
  }
}
