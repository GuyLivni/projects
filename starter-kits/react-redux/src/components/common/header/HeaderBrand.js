import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../../utils/styleUtils";

const Brand = styled(Link)`
  text-align: center;
  font-size: 2em;
  background: linear-gradient(to right, #9e7cc1, #8ecdea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.handheld`
     font-size: 1.7em;
  `};
`;

const HeaderBrand = () => (
  <Brand to="/">
    <h4>React Starter</h4>
  </Brand>
);

export default HeaderBrand;
