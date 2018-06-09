/* @flow */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import type { Movie } from "Movie-types";

type Props = {
  ...Movie,
  onSelect: Function
};

const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  border: 2px solid #24273c;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  background: #0b0f1f;
  :hover {
    border-color: #2f334e;
  }
  :active {
    transform: scale(0.97);
  }
`;

const Description = styled("div")`
  text-align: left;
`;

const Img = styled("img")`
  display: flex;
  align-items: center;
  margin-right: 10px;
  height: 35px;
`;

const Title = styled("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 330px;
  font-weight: 600;
  color: #ffffff;
`;

const Year = styled("div")`
  color: #9194a2;
`;

const Item = ({
  Title: title,
  Year: year,
  imdbID,
  Poster,
  onSelect
}: Props) => (
  <Container to={`/movie/${imdbID}`}>
    <Img src={Poster} alt="image" />
    <Description>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Description>
  </Container>
);

export default Item;
