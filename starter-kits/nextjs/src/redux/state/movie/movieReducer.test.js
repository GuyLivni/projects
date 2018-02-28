/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { makeApiAction } from '../../../utils/testUtils';
import { LIFECYCLE } from '../../../redux/middlewares/api';
import reducer from './movieReducer';
import { movieTypes } from './';

describe('user reducer', () => {
  const initState = fromJS({
    movies: [],
    movie: {},
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle GET_MOVIES and return movie list', () => {
    const movies = [
      {
        language: 'English',
        rating: 6,
        image:
          'https://www.chapter.org/sites/default/files/production/banner/LEGO%20Batman-%20Banner.jpg',
        id: 1,
        name: 'batman',
      },
      {
        language: 'German',
        rating: 4,
        image:
          'https://www.chapter.org/sites/default/files/production/banner/LEGO%20Batman-%20Banner.jpg',
        id: 2,
        name: 'lego batman',
      },
    ];

    const action = makeApiAction(LIFECYCLE.SUCCESS, {
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
    const movie = {
      language: 'English',
      rating: 6,
      image:
        'https://www.chapter.org/sites/default/files/production/banner/LEGO%20Batman-%20Banner.jpg',
      id: 1,
      name: 'batman',
    };

    const action = makeApiAction(LIFECYCLE.SUCCESS, {
      type: movieTypes.GET_MOVIE,
      payload: movie,
    });

    expect(reducer(initState, action)).toEqual(
      fromJS({
        movies: [],
        movie: fromJS(movie),
      }),
    );
  });
});
