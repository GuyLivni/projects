import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { apiMiddleware, loggerMiddleware } from "../middlewares";
import * as reducers from "../state";

const configureStore = initialState => {
  const rootReducer = combineReducers(reducers);
  const middlewares = [apiMiddleware, loggerMiddleware];

  const composeEnhancers =
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept("../state", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
