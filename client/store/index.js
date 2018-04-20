import { createStore, combineReducers, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import * as reducers from '../reducers';
let middlewares = null;

if (process.env.NODE_ENV === 'production') {
  middlewares = applyMiddleware(Thunk);
} else {
  middlewares = applyMiddleware(Thunk, Logger);
}

export default function configureStore(initialState) {
  if (initialState) {
    return createStore(
      combineReducers(reducers),
      initialState,
      middlewares,
    );
  }
  return createStore(
    combineReducers(reducers),
    middlewares,
  );
}
