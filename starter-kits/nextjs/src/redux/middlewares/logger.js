import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';

export default createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  stateTransformer: state => {
    const newState = {};
    Object.keys(state).forEach(key => {
      if (Iterable.isIterable(state[key])) {
        newState[key] = state[key].toJS();
      } else {
        newState[key] = state[key];
      }
    });
    return newState;
  },
  predicate: (getState, action) => true // eslint-disable-line
});
