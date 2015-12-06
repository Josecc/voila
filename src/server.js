/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel-core/polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import Html from './components/Html';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';

const server = global.server = express();
mongoose.connect('mongodb://localhost/shoes');

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(methodOverride());
server.use(cookieParser());
server.use(passport.initialize());

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content'));
server.use('/api/wishlist', require('./api/wishlist'));
server.use('/api/users', require('./api/user'));
server.use('/auth', require('./auth'));
server.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('<b>Invalid token</b>! Please log in again. ');
  }
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send('<!doctype html>\n' + html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + server.get('port'));
  if (process.send) {
    process.send('online');
  }
});
