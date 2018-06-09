import Loadable from "react-loadable";
import LoadingBar from "../components/common/loadingBar";

const AsyncHome = Loadable({
  loader: () => import("../screens/home"),
  loading: LoadingBar
});

const AsyncMovie = Loadable({
  loader: () => import("../screens/movie"),
  loading: LoadingBar
});

const AsyncNoMatch = Loadable({
  loader: () => import("../screens/noMatch"),
  loading: LoadingBar
});

export { AsyncHome, AsyncMovie, AsyncNoMatch };
