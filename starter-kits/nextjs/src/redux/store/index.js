import { createStore, compose, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import { apiMiddleware, loggerMiddleware } from '../middlewares';
import rootReducer from './reducers';

export const initStore = (initialState = {}) => {
  const middlewares = [apiMiddleware];
  let composeEnhancer = compose;

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
    composeEnhancer = composeWithDevTools;
  }

  return createStore(
    rootReducer(),
    fromJS(initialState),
    composeEnhancer(applyMiddleware(...middlewares)),
  );
};

export default comp => withRedux(initStore)(comp);
