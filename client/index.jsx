
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import Router from './router';
import configureStore from './store';
import './index.scss';

const store = configureStore();
ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept(['./router'], () => {
    ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));
  });
}