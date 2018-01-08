import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.jsx';

import {Provider} from 'react-redux';
import configureStore from './store/Store';
import {createPost, activatePost} from './actions/PostAction';

import './resources/stylesheets/app.sass';

const store = configureStore();
store.dispatch(createPost({title: 'yes', active: false}));
store.dispatch(createPost({title: 'yes 2', active: false}));
store.dispatch(activatePost('yes 2'));
console.log(store.getState());


hydrate(
<Provider store={store}>
  <BrowserRouter>
    <App {...window.__INITIAL_STATE__} />
  </BrowserRouter>
</Provider>,
document.getElementById('app'));
