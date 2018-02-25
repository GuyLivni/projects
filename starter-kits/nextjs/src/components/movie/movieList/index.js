import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';

const MovieListContainer = styled.ul`
  padding: 0;
  list-style: none;
`;

const renderMovieList = shows =>
  shows.map(movie => {
    const show = movie.get('show');
    const showId = show.get('id');
    return (
      <MovieItem
        key={showId}
        id={showId}
        image={show.getIn(['image', 'medium'])}
        name={show.get('name')}
        language={show.get('language')}
        rating={show.getIn(['rating', 'average'])}
      />
    );
  });

const MovieList = ({ shows }) => (
  <MovieListContainer>{renderMovieList(shows)}</MovieListContainer>
);

MovieList.propTypes = {
  shows: PropTypes.object.isRequired,
};

export default MovieList;
