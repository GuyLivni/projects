import { movieTypes } from "./";

const getMovies = () => ({
  type: movieTypes.GET_MOVIES,
  request: {
    method: "get",
    url: "http://api.tvmaze.com/search/shows?q=batman"
  }
});

export { getMovies };
