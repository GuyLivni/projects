/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { movieSelectors } from './';
import { movies } from './movieMockData';

describe('Movie Selectors', () => {
  describe('select movie list', () => {
    it('should return movies list as immutable Map', () => {
      const immMovies = fromJS(movies);

      const reduxState = fromJS({
        movies: fromJS(immMovies),
        movie: {},
      });

      const selected = movieSelectors.selectMovies(reduxState);
      expect(selected).toEqual(immMovies);
    });
  });

  describe('select single movie', () => {
    it('should return a single immutable movie object', () => {
      const movie = fromJS(movies[0]);

      const reduxState = fromJS({
        movies: [],
        movie,
      });

      const selected = movieSelectors.selectMovie(reduxState);
      expect(selected).toEqual(movie);
    });
  });
});
