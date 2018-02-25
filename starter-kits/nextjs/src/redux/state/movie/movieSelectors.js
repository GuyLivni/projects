const selectMovies = state => state.get('movies');

const selectMovie = state => state.get('movie');

export { selectMovies, selectMovie };
