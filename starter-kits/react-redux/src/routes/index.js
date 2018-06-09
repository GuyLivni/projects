import { AsyncHome, AsyncMovie, AsyncNoMatch } from "./asyncRoutes";

const routes = [
  {
    path: "/",
    component: AsyncHome,
    exact: true
  },
  {
    path: "/movie/:id",
    component: AsyncMovie
  },
  {
    path: "",
    component: AsyncNoMatch
  }
];

export default routes;
