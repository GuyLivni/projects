import Loadable from "react-loadable";
import LoadingBar from "../components/common/loadingBar";

const AsyncHome = Loadable({
  loader: () => import("../views/home"),
  loading: LoadingBar
});

const AsyncMovies = Loadable({
  loader: () => import("../views/movies"),
  loading: LoadingBar
});

const AsyncMoviesDashboard = Loadable({
  loader: () => import("../components/movie/moviesDashboard"),
  loading: LoadingBar
});

const AsyncNoMatch = Loadable({
  loader: () => import("../views/noMatch"),
  loading: LoadingBar
});

export { AsyncHome, AsyncMovies, AsyncMoviesDashboard, AsyncNoMatch };
