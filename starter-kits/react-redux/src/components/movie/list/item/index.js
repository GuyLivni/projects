/* @flow */
import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import styled from "styled-components";

const StyledDescription = styled(Card.Description)`
  overflow-y: auto;
  height: 100px;
`;

type Props = {
  /** Movie name */
  name?: string,
  /** Summary of the movie */
  summary?: string,
  /** Movie thumbnail */
  image?: string,
  /** Movie genres */
  genres?: string,
  /** Movie rating */
  rating?: number
};

const MovieItem = ({ name, summary, image, genres, rating }: Props) => (
  <Card color="blue">
    <Card.Content>
      <Image floated="right" size="tiny" src={image} />
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{genres}</Card.Meta>
    </Card.Content>
    <Card.Content>
      <StyledDescription>{summary}</StyledDescription>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="star" color="yellow" />
        {rating}
      </a>
    </Card.Content>
  </Card>
);

export default MovieItem;
