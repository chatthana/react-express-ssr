import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.jsx';

import './resources/stylesheets/app.sass';

// Attach the event handler, not the complete DOM as we have server rendered
hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
