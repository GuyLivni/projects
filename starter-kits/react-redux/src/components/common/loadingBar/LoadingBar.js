import Bar from "react-redux-loading-bar";
import styled from "styled-components";

const LoadingBar = styled(Bar).attrs({
  showFastActions: true
})`
  background: linear-gradient(to right, #9e7cc1, #8ecdea);
  height: 4px;
  position: fixed;
  z-index: 10000000000;
`;

export default LoadingBar;
