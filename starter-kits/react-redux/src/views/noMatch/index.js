import React from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import { media } from "../../utils/styleUtils";

const NoMatchContainer = styled(Container)`
  margin-top: 150px;
  display: flex !important;
  align-items: center;
  text-align: center;
`;

const ErrorCode = styled.h1`
  margin: 0;
  font-size: 17em;
  flex: 1;
  background: -webkit-linear-gradient(to right, #9e7cc1, #8ecdea);
  background: linear-gradient(to right, #9e7cc1, #8ecdea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.handheld`
       font-size: 6em;
    `};
`;

const ErrorMessage = styled.h2`
  color: #b2b2b2;
  font-size: 5em;
  margin: 0;
  flex: 1.3;
  text-align: left;
  margin-left: 80px;
  ${media.handheld`
       font-size: 2em;
    `};
`;

const NoMatch = () => {
  return (
    <NoMatchContainer>
      <ErrorCode>404 </ErrorCode>
      <ErrorMessage>We couldn’t find this page. </ErrorMessage>
    </NoMatchContainer>
  );
};

export default NoMatch;
