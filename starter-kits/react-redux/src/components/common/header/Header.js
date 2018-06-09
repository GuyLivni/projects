import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import HeaderBrand from "./HeaderBrand";

const HeaderContainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  height: 56px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  &:after {
    background: linear-gradient(to right, #9e7cc1, #8ecdea);
    content: "";
    width: 100%;
    position: absolute;
    top: 55px;
    height: 3px;
    left: 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderLogo />
    <HeaderBrand />
  </HeaderContainer>
);

export default Header;
