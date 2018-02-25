import React from "react";
import RouteWithSubRoutes from "../../utils/routeWithSubRoutes";

const Movies = ({ routes }) => {
  return routes.map(route => (
    <RouteWithSubRoutes key={route.path} {...route} />
  ));
};

export default Movies;
