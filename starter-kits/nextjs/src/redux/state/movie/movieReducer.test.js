/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { createApiAction } from '../../../utils/testUtils';
import { LIFECYCLE } from '../../../redux/middlewares/api';
import reducer from './movieReducer';
import { movieTypes } from './';
import { movies } from './movieMockData';

describe('movie reducer', () => {
  const initState = fromJS({
    movies: [],
    movie: {},
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle GET_MOVIES and return movie list', () => {
    const action = createApiAction(LIFECYCLE.SUCCESS, {
      type: movieTypes.GET_MOVIES,
      payload: movies,
    });

    expect(reducer(initState, action)).toEqual(
      fromJS({
        movies: fromJS(movies),
        movie: {},
      }),
    );
  });

  it('should handle GET_MOVIE and return single movie', () => {
    const action = createApiAction(LIFECYCLE.SUCCESS, {
      type: movieTypes.GET_MOVIE,
      payload: movies[0],
    });

    expect(reducer(initState, action)).toEqual(
      fromJS({
        movies: [],
        movie: fromJS(movies[0]),
      }),
    );
  });
});
