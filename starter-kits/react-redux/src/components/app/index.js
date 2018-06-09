import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import LoadingBar from "../common/loadingBar";
import Header from "../common/header";
import Footer from "../common/footer";
import RouteWithSubRoutes from "../../utils/routeWithSubRoutes";
import routes from "../../routes";

const Content = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  margin: 100px 20px;
`;

const App = () => (
  <Fragment>
    <LoadingBar />
    <Header />
    <Content>
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </Content>
    <Footer />
  </Fragment>
);

export default App;
