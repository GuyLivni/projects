import { hideLoading, showLoading } from "react-redux-loading-bar";
import axios from "axios";
import { KEY, LIFECYCLE } from "./constants";

const handleEventHook = (meta, hook, ...args) => {
  if (meta && meta[hook] && typeof meta[hook] === "function") {
    // we want to make sure that an "eventHook" doesn't cause a dispatch to fail, so we wrap it
    // with a try..catch. In dev, we `console.error` which will result in a redbox.
    try {
      meta[hook](...args);
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  }
};

const handleLoadingBar = (shouldShow, scope, fnc, dispatch) =>
  shouldShow && dispatch(fnc(scope));

const dispatchAction = (dispatch, type, data, meta, startPayload, CYCLE) => {
  const action = {
    type,
    payload: data,
    meta: {
      ...meta,
      [KEY.LIFECYCLE]: LIFECYCLE[CYCLE]
    }
  };

  if (CYCLE === "SUCCESS" || CYCLE === "FAILURE")
    action.meta.startPayload = startPayload;
  if (CYCLE === "FAILURE") action.error = true;

  dispatch(action);
};

const middleware = ({ dispatch, getState }) => next => async action => {
  // a common use case for redux-thunk is to conditionally dispatch an action. By allowing for null,
  // we satisfy this use case without people having to use redux-thunk.
  if (action == null) {
    return null;
  }

  // this is the "vanilla redux" pathway. These are plain old actions that will get sent to reducers
  if (!Object.prototype.hasOwnProperty.call(action, "request")) {
    return next(action);
  }

  // this is the convention-based promise middleware. Ideally, all "async actions" would go through
  // this pathway.
  const { request, type, payload, meta, loadingBar = {} } = action;
  const { shouldShow = true, scope = "default" } = loadingBar;
  const startPayload = payload;

  handleLoadingBar(shouldShow, scope, showLoading, dispatch);
  dispatchAction(dispatch, type, payload, meta, startPayload, "START");
  handleEventHook(meta, "onStart", payload, getState);

  const success = data => {
    dispatchAction(dispatch, type, data, meta, startPayload, "SUCCESS");
    handleEventHook(meta, "onSuccess", data, getState);
    handleEventHook(meta, "onFinish", true, getState);
    handleLoadingBar(shouldShow, scope, hideLoading, dispatch);
    return { payload: data };
  };

  const failure = error => {
    dispatchAction(dispatch, type, error, meta, startPayload, "FAILURE");
    handleEventHook(meta, "onFailure", error, getState);
    handleEventHook(meta, "onFinish", false, getState);
    handleLoadingBar(shouldShow, scope, hideLoading, dispatch);
    return { error: true, payload: error };
  };

  try {
    const { data } = await axios({ ...request });
    return success(data);
  } catch (error) {
    return failure(error);
  }
};

export default middleware;
