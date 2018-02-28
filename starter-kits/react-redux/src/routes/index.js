import {
  AsyncHome,
  AsyncMovies,
  AsyncMoviesDashboard,
  AsyncNoMatch
} from "./asyncRoutes";

const routes = [
  {
    path: "/",
    component: AsyncHome,
    exact: true
  },
  {
    path: "/movies",
    component: AsyncMovies,
    routes: [
      {
        path: "/movies",
        component: AsyncMoviesDashboard,
        exact: true
      }
    ]
  },
  {
    path: "",
    component: AsyncNoMatch
  }
];

export default routes;
