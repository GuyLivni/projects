import React                  from 'react';
import styled, {injectGlobal} from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

injectGlobal`
  body, html {
    font-family: benton-sans, 'Helvetica Neue', sans-serif;
  }
  
  pre {
    overflow: auto !important;
  }
  
  #root {
    height: 100%;
  }
`;

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Container = ({ story }) => (
  <StyledContainer>
    {story()}
  </StyledContainer>
);

export default Container;