import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Teaser from './Teaser.jsx';
import {connect} from 'react-redux';

import {createPost} from '../actions/PostAction';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

class App extends React.Component {
  render() {
    let {app_name} = this.props;
    return (
      <div>
        <Header app_name={app_name} />
        <Teaser />
        <Main />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
