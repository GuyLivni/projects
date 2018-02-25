import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from '../../../routes/index';

const StyledItem = styled.li`
  display: flex;
  border: 1px solid #ddd;
  width: 250px;
  padding: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

const MovieImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieItem = ({ image, id, name, language, rating }) => (
  <StyledItem>
    <MovieImage src={image} alt="img" />
    <MovieInfo>
      <Link route={`/movie/${id}`}>
        <a>{name}</a>
      </Link>
      <div>language: {language}</div>
      <div>rating: {rating}</div>
    </MovieInfo>
  </StyledItem>
);

MovieItem.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  language: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieItem;
