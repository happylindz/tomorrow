
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initReactFastclick from 'react-fastclick';
import 'babel-polyfill';
import Router from './router';
import configureStore from './store';
import './index.scss';
import eventUtil from './util/eventUtil';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const store = configureStore(window.__INITIAL_STATE__);
initReactFastclick();
ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept(['./router'], () => {
    ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));
  });
}

eventUtil.addHandler(window, 'resize', () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth > 768) {
    htmlWidth = 768;
  }
  htmlDom.style.fontSize = (htmlWidth / 10) + 'px';
});

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  runtime.register();
}