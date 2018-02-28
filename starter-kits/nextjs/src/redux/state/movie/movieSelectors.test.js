/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { movieSelectors } from './';

describe('Movie Selectors', () => {
  describe('select movie list', () => {
    it('should return movies list as immutable Map', () => {
      const movies = fromJS([
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
        language: 'German',
        rating: 4,
        image:
          'https://www.chapter.org/sites/default/files/production/banner/LEGO%20Batman-%20Banner.jpg',
        id: 2,
        name: 'lego batman',
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
