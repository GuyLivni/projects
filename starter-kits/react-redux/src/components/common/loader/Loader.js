import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
`;

const Loader = styled("div")`
  width: 40px;
  height: 40px;
  background-color: #fff;

  margin: 100px auto;
  -webkit-animation: ${rotate360} 1.2s infinite ease-in-out;
  animation: ${rotate360} 1.2s infinite ease-in-out;
`;

export default Loader;
