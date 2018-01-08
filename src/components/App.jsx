import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Teaser from './Teaser.jsx';

import {createPost} from '../actions/PostAction';

export default class App extends React.Component {
  render() {
    console.log(store);
    console.log (createPost({title: 'message'}));
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
