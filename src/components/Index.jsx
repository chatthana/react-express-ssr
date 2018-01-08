import React from 'react';
import {Link} from 'react-router-dom';

export default class Index extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="grid-desktop-6" style={{textAlign: 'center', margin: '0 auto', float: 'none'}}>
            <h3>Boilerplate Profile</h3>
            <p>
              This is simply a React application built on top of the Express V.4
              framework that works well on both server and client. This means you
              can run nearly identical code on both server and client and enjoy
              SEO-friendly application of your own
            </p>
            <Link to="/about/personal" className="button">View Details</Link>
          </div>
        </div>
      </div>
    )
  }
}
