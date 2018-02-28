import React from "react";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import LoadingBar from "../common/loadingBar";
import Header from "../../components/common/header";
import RouteWithSubRoutes from "../../utils/routeWithSubRoutes";
import routes from "../../routes/index";

const AppContainer = styled.div`
  height: 100%;
`;

const App = () => (
  <AppContainer>
    <LoadingBar />
    <Header />
    <Switch>
      {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
    </Switch>
  </AppContainer>
);

export default App;
