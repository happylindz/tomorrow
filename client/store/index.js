import { createStore, combineReducers, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import * as reducers from '../reducers';

export default function configureStore(initialState) {
  if (initialState) {
    return createStore(
      combineReducers(reducers),
      initialState,
      applyMiddleware(Thunk, Logger)
    );
  }
  return createStore(
    combineReducers(reducers),
    applyMiddleware(Thunk, Logger)
  );
}
