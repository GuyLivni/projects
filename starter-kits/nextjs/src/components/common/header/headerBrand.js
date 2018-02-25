import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import { media } from '../../../utils/styleUtils';

const Brand = styled.div`
  text-align: center;
  font-size: 2em;
  flex: 1;
  cursor: default;
  background: linear-gradient(to right, #ffffff, #ffe5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.handheld`
     font-size: 1.7em;
  `};
`;

const HeaderBrand = () => (
  <Brand>
    <Header content="Next.js Starter Kit" />
  </Brand>
);

export default HeaderBrand;
