import React from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

const HomeContainer = styled(Container)`
  margin-top: 150px;
  text-align: center;
`;

const ScreensHome = () => {
  return (
    <HomeContainer>
      <h1>React starter boilerplate</h1>
    </HomeContainer>
  );
};

export default ScreensHome;
