import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import Root from "./components/Root";
import configureStore from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  ${styledNormalize}
  
  body, html {
    font-family: benton-sans, 'Helvetica Neue', sans-serif;
    background: #00000f;
    height: 100%;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
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
registerServiceWorker();
