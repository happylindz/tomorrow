import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import configureStore from './store';

import Router, { preloadComponent } from './router';

export default async (preloadedState, url) => {
  const store = configureStore(preloadedState);
  await preloadComponent(url);
  return [renderToString(<Provider store={store}><Router location={url} context={{}} /></Provider>), store.getState()];
};