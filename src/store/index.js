import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './rootReducer';
import axiosInstances from '../../configs/axiosInstances';

const middlewares = applyMiddleware(
  thunk.withExtraArgument({ ...axiosInstances })
);

const composeMiddleware =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewares)
    : applyMiddleware(middlewares);

export default (initialState = {}) =>
  createStore(reducers, initialState, composeMiddleware);
