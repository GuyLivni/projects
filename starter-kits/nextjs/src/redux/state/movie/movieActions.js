import { movieTypes } from './';

const getMovies = () => ({
  type: movieTypes.GET_MOVIES,
  request: {
    method: 'get',
    url: 'http://api.tvmaze.com/search/shows?q=batman',
  },
});

const getMovie = id => ({
  type: movieTypes.GET_MOVIE,
  request: {
    method: 'get',
    url: `http://api.tvmaze.com/shows/${id}`,
  },
});

export { getMovies, getMovie };
