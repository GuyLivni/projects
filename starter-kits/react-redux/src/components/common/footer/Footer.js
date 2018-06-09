import styled from "styled-components";

const Footer = styled("footer")`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  height: 56px;
  justify-content: center;
  align-items: center;
  &:before {
    background: linear-gradient(to right, #9e7cc1, #8ecdea);
    content: "";
    width: 100%;
    position: absolute;
    top: -2px;
    height: 3px;
    left: 0;
  }
`;

export default Footer;
