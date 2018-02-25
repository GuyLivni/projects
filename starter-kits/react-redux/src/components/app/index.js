import React from "react";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import LoadingBar from "react-redux-loading-bar";
import Header from "../../components/common/header";
import RouteWithSubRoutes from "../../utils/routeWithSubRoutes";
import routes from "../../routes/index";

const AppContainer = styled.div`
  height: 100%;
`;

const StyledLoadingBar = styled(LoadingBar)`
  background: linear-gradient(to right, #9e7cc1, #8ecdea);
  height: 4px;
  position: fixed;
  z-index: 10000000000;
`;

const App = () => (
  <AppContainer>
    <StyledLoadingBar showFastActions />
    <Header />
    <Switch>
      {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
    </Switch>
  </AppContainer>
);

export default App;
