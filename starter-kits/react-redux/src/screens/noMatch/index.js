import React from "react";
import styled from "styled-components";
import { media } from "../../utils/styleUtils";

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

const ErrorCode = styled("h1")`
  font-size: 17em;
  flex: 1;
  text-align: center;
  background: -webkit-linear-gradient(to right, #9e7cc1, #8ecdea);
  background: linear-gradient(to right, #9e7cc1, #8ecdea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.handheld`
       font-size: 6em;
    `};
`;

const ErrorMessage = styled("h2")`
  color: #b2b2b2;
  font-size: 5em;
  margin: 0;
  flex: 1.3;
  text-align: left;
  margin-left: 80px;
  ${media.handheld`
       margin-left: 20px;
       font-size: 2em;
    `};
`;

const ScreensNoMatch = () => {
  return (
    <Container>
      <ErrorCode>404 </ErrorCode>
      <ErrorMessage>We couldn’t find this page. </ErrorMessage>
    </Container>
  );
};

export default ScreensNoMatch;
