import Home from "../views/home";
import Movies from "../views/movies";
import MoviesDashboard from "../components/movie/moviesDashboard";
import NoMatch from "../views/noMatch";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/movies",
    component: Movies,
    routes: [
      {
        path: "/movies",
        component: MoviesDashboard,
        exact: true
      }
    ]
  },
  {
    path: "",
    component: NoMatch
  }
];

export default routes;
