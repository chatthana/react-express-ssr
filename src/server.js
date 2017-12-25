import Express from 'express';
import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import bodyParser from 'body-parser';

import App from './components/App.jsx';

let app = Express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(Express.static(path.join(__dirname, '..', 'dist')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('*', (req, res, next) => {
  let context = {};
  let appString = renderToString(<StaticRouter location={req.url} context={context}><App /></StaticRouter>);
  res.render('index', {body: appString});
});

app.listen(8081, () => {
  console.log('The app is initialized on the port 8081');
});
