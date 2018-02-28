import asyncComponent from "../utils/asyncComponent";

const AsyncHome = asyncComponent(() => import("../views/home"));
const AsyncMovies = asyncComponent(() => import("../views/movies"));
const AsyncMoviesDashboard = asyncComponent(() => import("../components/movie/moviesDashboard"));
const AsyncNoMatch = asyncComponent(() => import("../views/noMatch"));

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
