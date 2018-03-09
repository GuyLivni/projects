import { AsyncHome, AsyncMovies, AsyncNoMatch } from "./asyncRoutes";

const routes = [
  {
    path: "/",
    component: AsyncHome,
    exact: true
  },
  {
    path: "/movies",
    component: AsyncMovies
  },
  {
    path: "",
    component: AsyncNoMatch
  }
];

export default routes;
