import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import Root from "./components/Root";
import configureStore from "./redux/store";
import "semantic-ui-css/semantic.min.css";

injectGlobal`
  ${styledNormalize}
  body, html {
    font-family: benton-sans, 'Helvetica Neue', sans-serif;
    background: #f9fafb;
  }
  
  #root {
    height: 100%;
  }
`;

const store = configureStore();
const rootEl = document.getElementById("root");

render(<Root store={store} />, rootEl);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    render(<Root store={store} />, rootEl);
  });
}
