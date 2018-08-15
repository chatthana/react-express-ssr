import React, { Component } from 'react';
import { connect } from 'react-redux';
import {request_team_members} from '../../../state/actions/TeamActions';
import LoaderContainer from '../../presentation/LoaderContainer';

const mapStateToProps = (state, ownProps) => ({
  features: state.features,
  team: state.team
});

const mapDispatchToProps = dispatcher => ({
  request_team_members: () => dispatcher(request_team_members())
});

export default (connect(mapStateToProps, mapDispatchToProps))(class Profile extends Component {

  componentDidMount() {
    this.props.request_team_members();
  }

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
              return (<div className="grid-desktop-4" key={feature.id}>
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

          <div className="row with-medium-vertical-margin">
            <div className="grid-desktop-12">
              <h1 style={{textAlign:'center'}}>Our Team</h1>
            </div>
          </div>
          <div className="row">
            {this.props.team.members.length > 0 ? this.props.team.members.map(member => {
              return (<div className="grid-desktop-4" key={member.id} style={{textAlign:'center'}}>
                <div className="profile-avatar-container">
                  <img src={require('../../../resources/images/' + member.avatar)} alt=""/>
                </div>
                <h4>{member.fullname}</h4>
                <h6 className="team-title">{member.role}</h6>
                <p>{member.profile}</p>
                <button className="button red">Connect +</button>
              </div>)
            }) : <LoaderContainer />}
          </div>
        </div>
      </div>
    )
  }
});
