import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';

import {Provider} from 'react-redux';
import configureStore from './store/Store';

import initialState from './presets/initialState';

import './resources/stylesheets/app.sass';

const store = configureStore(initialState);

hydrate(
<Provider store={store}>
  <BrowserRouter>
    <App {...window.__INITIAL_STATE__} />
  </BrowserRouter>
</Provider>,
document.getElementById('app'));
