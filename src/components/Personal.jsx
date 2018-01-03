import React, { Component } from 'react';

export default class Personal extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="teaser">
          <img src="https://www.primefaces.org/wp-content/uploads/2017/09/primereact-transparent-250.png" />
          <h1>React & Express</h1>
          <p>Render React on the server with confidence</p>
        </div>
        <div className="row">
          <div className="grid-desktop-4">
            <h3>Isomorphic</h3>
            <p>
              If you have been worring about rendering React application on the server, here's the greatest
              way you can learn how to build a server-side React application using express
            </p>
          </div>
          <div className="grid-desktop-4">
            <h3>Stay anonymous</h3>
            <p>Black holes can be big or small. Scientists think the smallest black holes are as small as just one atom. These black holes are very tiny but have the mass of a large mountain. Mass is the amount of matter, or "stuff," in an object</p>
          </div>
          <div className="grid-desktop-4">
            <h3>Corruption eligible</h3>
            <p>Black holes can be big or small. Scientists think the smallest black holes are as small as just one atom. These black holes are very tiny but have the mass of a large mountain. Mass is the amount of matter, or "stuff," in an object</p>
          </div>
        </div>
      </div>
    )
  }
}
