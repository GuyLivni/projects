/* @flow */
import React from "react";
import { Card } from "semantic-ui-react";
import type { Movies } from "Movie-types";
import MovieItem from "./movieItem/";

type Props = {
  movies: Movies
};

const MovieList = ({ movies }: Props) => {
  const renderMovies = () =>
    movies.map(({ show }) => {
      return (
        <MovieItem
          key={show.id}
          name={show.name}
          summary={show.summary}
          genres={show.genres.join(", ")}
          image={show.image.medium}
          rating={show.rating.average}
        />
      );
    });

  return (
    <Card.Group stackable itemsPerRow="3">
      {renderMovies()}
    </Card.Group>
  );
};

export default MovieList;
