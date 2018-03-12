import Express from 'express';
import React from 'react';
import path from 'path';
import {Provider} from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import bodyParser from 'body-parser';

import {connect} from 'react-redux';

import router from './routes/api';

import App from './components/App';

let app = Express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(Express.static(path.join(__dirname, '..', 'dist')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// As the favicon doesn't work when we never add it to the app
// We simply response with the status of 204
app.get('/favicon.ico', function(req, res) {
    return res.status(204);
});

app.use('/api/v1', router);

// Catch all requests and let the react-router-dom handles the routing
app.get('*', (req, res, next) => {
  let context = {};
  let app_name = 'ReactExpress';
  let initial_states = { app_name };
  let appString = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <App {...initial_states} />
      </Router>
    </Provider>);
  res.render('index', {body: appString, initial_states: JSON.stringify(initial_states)});
});

app.listen(8081, () => {
  console.log('The app is initialized on the port 8081');
});
