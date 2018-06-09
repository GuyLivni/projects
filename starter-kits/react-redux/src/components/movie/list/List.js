/* @flow */
import React from "react";
import styled from "styled-components";
import type { Movies } from "Movie-types";
import MovieItem from "./item";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

type Props = {
  movies: Movies,
  onSelect: Function
};

const renderMovieList = (movies, onSelect) =>
  movies.map(movie => (
    <MovieItem key={movie.imdbID} {...movie} onSelect={onSelect} />
  ));

const MovieList = ({ movies, onSelect }: Props) => {
  return <Container>{renderMovieList(movies, onSelect)}</Container>;
};

export default MovieList;
