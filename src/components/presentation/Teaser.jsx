import React from 'react';

export default class Teaser extends React.Component {
  render() {
    return (
      <div>
        <div className="teaser">
          <img src={require('../../resources/images/original_logo.png')} />
          <h1>Universal React Application</h1>
          <p>Build your React application that works well on the server and the client sides</p>
        </div>
      </div>
    )
  }
}
