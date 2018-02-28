/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { movieSelectors } from './';

describe('Movie Selectors', () => {
  describe('select movie list', () => {
    it('should return movies list as immutable Map', () => {
      const movies = fromJS([
        {
          score: 22.34,
          show: {
            id: 1,
            language: 'English',
            name: 'Batman',
          },
        },
        {
          score: 12.34,
          show: {
            id: 2,
            language: 'German',
            name: 'Batman unlimited',
          },
        },
      ]);

      const reduxState = fromJS({
        movies,
        movie: {},
      });

      const selected = movieSelectors.selectMovies(reduxState);
      expect(selected).toEqual(movies);
    });
  });

  describe('select single movie', () => {
    it('should return a single immutable movie object', () => {
      const movie = fromJS({
        score: 12.34,
        show: {
          id: 2,
          language: 'German',
          name: 'Batman unlimited',
        },
      });

      const reduxState = fromJS({
        movies: [],
        movie,
      });

      const selected = movieSelectors.selectMovie(reduxState);
      expect(selected).toEqual(movie);
    });
  });
});
