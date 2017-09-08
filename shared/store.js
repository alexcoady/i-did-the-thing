// @flow
// NPM dependencies
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist';


export const middlewares = [
  promiseMiddleware(),
  thunkMiddleware,
];

export const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);
