
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import Router from './router';
import configureStore from './store';
import './index.scss';
import eventUtil from './util/eventUtil';
const store = configureStore(window.__INITIAL_STATE__);
ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept(['./router'], () => {
    ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));
  });
}


const htmlDom = document.getElementsByTagName('html')[0];
const resizeFontSize = () => {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth > 768) {
    htmlWidth = 768;
  }
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
resizeFontSize();
eventUtil.addHandler(window, 'resize', (e) => {
  resizeFontSize();
});