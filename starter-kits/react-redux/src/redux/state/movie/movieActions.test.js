import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { apiMiddleware } from "../../../redux/middlewares";
import { createApiAction } from "../../../utils/testUtils";
import { LIFECYCLE } from "../../../redux/middlewares/api";
import { movieActions, movieTypes } from "./";
import { movies } from "./movieMockData";

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe("getUsers actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("creates GET_MOVIES action after successfully fetching movies", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies
      });
    });

    const expectedActions = [
      showLoading(),
      createApiAction(LIFECYCLE.START, {
        type: movieTypes.GET_MOVIES
      }),
      createApiAction(LIFECYCLE.SUCCESS, {
        type: movieTypes.GET_MOVIES,
        payload: movies
      }),
      hideLoading()
    ];

    const store = mockStore({ movies: [], movieDetails: {} });

    return store.dispatch(movieActions.getMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
