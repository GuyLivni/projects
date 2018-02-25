import { createStore, applyMiddleware, combineReducers } from "redux";
import { apiMiddleware } from "../middlewares";
import * as reducers from "../state";

const configureStore = initialState => {
  const rootReducer = combineReducers(reducers);
  const middlewares = [apiMiddleware];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
