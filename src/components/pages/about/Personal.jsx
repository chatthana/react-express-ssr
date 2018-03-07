import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  features: state.features
});

export default (connect(mapStateToProps, {}))(class Personal extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="row">
            <div className="grid-desktop-12">
              <h1 style={{textAlign:'center'}}>Features</h1>
            </div>
          </div>
          <div className="row">
            {this.props.features.map(feature => {
              return (<div className="grid-desktop-4">
                <h4>{feature.title}</h4>
                <p>{feature.content}</p>
              </div>)
            })}
          </div>
        </div>
      </div>
    )
  }
});
