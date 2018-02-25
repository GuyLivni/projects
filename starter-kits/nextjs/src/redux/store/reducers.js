import { combineReducers } from 'redux-immutable';
import * as reducers from '../state';

export default function rootReducer() {
  return combineReducers(reducers);
}
