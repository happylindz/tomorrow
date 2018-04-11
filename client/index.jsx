'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import Router from './router';
import { title } from './config';
import configureStore from './store';
import './index.less';

export default class Index extends Component {
  static getPartial({ store, ctx }) {
    const html = (
      <Provider store={store}>
        <Router location={ctx.req.url} context={{}} />
      </Provider>
    );
    return { html };
  }

  static getStore({ preloadedState }) {
    const store = configureStore(preloadedState);
    return store;
  }

  render() {
    const { html, helper, state } = this.props;
    console.log(helper);
    return (
      <html>
        <head>
          <title>{ title }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="stylesheet" href={helper.asset('index.css')} />
        </head>
        <body>
          <div
            id="container"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__ = ${state}`,
            }}
          />
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('index.js')} />
        </body>
      </html>
    );
  }
}

/**
 * client scope, wrapped in __CLIENT__ detect block
 * only run in client side
 */
if (__CLIENT__) {
  const store = configureStore(window.__INITIAL_STATE__);
  const app = (
    <Provider store={store}>
      <Router />
    </Provider>
  );
  ReactDOM.hydrate(app, document.getElementById('container'));
}
