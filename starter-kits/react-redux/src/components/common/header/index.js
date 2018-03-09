import React from "react";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderBrand from "./HeaderBrand";

const HeaderContainer = styled.nav`
  display: flex;
  background: #fff;
  height: 56px;
  padding: 0 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
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
    <HeaderMenu />
  </HeaderContainer>
);

export default Header;
