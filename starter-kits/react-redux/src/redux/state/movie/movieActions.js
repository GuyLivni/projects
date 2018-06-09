import { movieTypes } from "./";

const OMDB_BASE_URL = "http://www.omdbapi.com/";
const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

const getMovies = title => ({
  type: movieTypes.GET_MOVIES,
  request: {
    method: "get",
    url: `${OMDB_BASE_URL}?s=${title}&apikey=${OMDB_KEY}`
  }
});

const getMovie = id => ({
  type: movieTypes.GET_MOVIE,
  request: {
    method: "get",
    url: `${OMDB_BASE_URL}?i=${id}&plot=full&apikey=${OMDB_KEY}`
  }
});

export { getMovies, getMovie };
