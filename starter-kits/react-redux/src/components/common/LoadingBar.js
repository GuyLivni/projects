import React from "react";
import RRLoadingBar from "react-redux-loading-bar";
import styled from "styled-components";

const StyledLoadingBar = styled(RRLoadingBar)`
  background: linear-gradient(to right, #9e7cc1, #8ecdea);
  height: 4px;
  position: fixed;
  z-index: 10000000000;
`;

const LoadingBar = () => <StyledLoadingBar showFastActions />;

export default LoadingBar;
