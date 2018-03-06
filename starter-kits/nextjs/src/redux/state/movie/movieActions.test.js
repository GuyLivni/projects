/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { fromJS } from 'immutable';
import { apiMiddleware } from '../../../redux/middlewares';
import { createApiAction } from '../../../utils/testUtils';
import { LIFECYCLE } from '../../../redux/middlewares/api';
import { movieActions, movieTypes } from './';
import { movies } from './movieMockData';

const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe('getUsers actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates GET_MOVIES action after successfully fetching movies', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const expectedActions = [
      showLoading(),
      createApiAction(LIFECYCLE.START, {
        type: movieTypes.GET_MOVIES,
      }),
      createApiAction(LIFECYCLE.SUCCESS, {
        type: movieTypes.GET_MOVIES,
        payload: movies,
      }),
      hideLoading(),
    ];

    const store = mockStore(fromJS({ movies: [], movie: {} }));

    return store.dispatch(movieActions.getMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_MOVIE action after successfully fetching a movie', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies[0],
      });
    });

    const expectedActions = [
      showLoading(),
      createApiAction(LIFECYCLE.START, {
        type: movieTypes.GET_MOVIE,
      }),
      createApiAction(LIFECYCLE.SUCCESS, {
        type: movieTypes.GET_MOVIE,
        payload: movies[0],
      }),
      hideLoading(),
    ];

    const store = mockStore(fromJS({ movies: [], movie: {} }));

    return store.dispatch(movieActions.getMovie()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
