/* @flow */
import React from "react";
import styled from "styled-components";
import type { Movie } from "Movie-types";

const Container = styled("div")`
  display: flex;
  max-width: 850px;
`;

const Image = styled("img")`
  height: 350px;
`;

const Description = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Title = styled("h1")`
  color: #fff;
  padding: 0;
  margin: 0;
`;

const Hdivider = styled("hr")`
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #24273c;
  margin: 1em 0;
  padding: 0;
`;

const Vdivider = styled("div")`
  margin: 0 10px;
`;

const Ratings = styled("div")`
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const RatingValue = styled("div")`
  font-size: 2em;
  font-weight: 600;
`;

const SectionTitle = styled("div")`
  color: #a8a8b3;
  text-transform: uppercase;
  font-weight: 500;
`;

const Section = styled("div")`
  margin: 10px 0;
  color: #fff;
`;

const Extra = styled("div")`
  display: flex;
  color: #a8a8b3;
  font-weight: 500;
`;

const Credits = styled("div")`
  display: flex;
  flex-direction: column;
`;

type Props = {
  ...Movie
};

const Details = ({
  Poster,
  Title: title,
  Genre,
  Released,
  Country,
  Runtime,
  Ratings: ratings,
  Plot,
  Director,
  Writer,
  Actors
}: Props) => {
  return (
    <Container>
      <Image src={Poster} alt="poster" />
      <Description>
        <Title>{title}</Title>
        <Extra>
          <div>{Genre}</div>
          <Vdivider>|</Vdivider>
          <div>
            {Released} ({Country})
          </div>
          <Vdivider>|</Vdivider>
          <div>{Runtime}</div>
        </Extra>
        <Hdivider />
        <Ratings>
          {ratings &&
            ratings.map(({ Source, Value }) => (
              <div key={Source}>
                <SectionTitle>{Source}</SectionTitle>
                <RatingValue>{Value}</RatingValue>
              </div>
            ))}
        </Ratings>
        <Section>
          <SectionTitle>Plot</SectionTitle>
          {Plot}
        </Section>
        <Hdivider />
        <Credits>
          <Section>
            <SectionTitle>Director:</SectionTitle>
            <div>{Director}</div>
          </Section>
          <Section>
            <SectionTitle>Writers:</SectionTitle>
            <div>{Writer}</div>
          </Section>
          <Section>
            <SectionTitle>Actors:</SectionTitle>
            <div>{Actors}</div>
          </Section>
        </Credits>
      </Description>
    </Container>
  );
};

export default Details;
