import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  features: state.features,
  teams: state.teams
});

export default (connect(mapStateToProps, {}))(class Personal extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="row">
            <div className="grid-desktop-12">
              <h1 style={{textAlign:'center'}}>Features</h1>
              <p>
                Besides basic React & Redux application boilerplate that works on both server and client,
                Our boilerplate introduces Blacknight SASS framework that complies to CSS which we treat as
                a lightweight alternative to Bootstrap
              </p>
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

          <div className="row" style={{textAlign:'center'}}>
            <div className="grid-desktop-12">
              <button className="button">Learn More</button>
            </div>
          </div>

          <div className="row">
            <div className="grid-desktop-12">
              <h1 style={{textAlign:'center'}}>Our Team</h1>
            </div>
          </div>
          <div className="row">
            {this.props.teams.map(team => {
              return (<div className="grid-desktop-4" style={{textAlign:'center'}}>
                <div className="profile-avatar-container">
                  <img src={require('../../../resources/images/' + team.avatar)} alt=""/>
                </div>
                <h4>{team.fullname}</h4>
                <h6 className="team-title">{team.role}</h6>
                <p>{team.profile}</p>
                <button className="button red">Connect +</button>
              </div>)
            })}
          </div>
        </div>
      </div>
    )
  }
});
