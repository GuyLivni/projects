import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

export default function(initialState = {}) {
  switch (process.env.NODE_ENV) {
    case "production":
      return configureStoreProd(initialState);

    case "development":
      return configureStoreDev(initialState);

    default:
      return configureStoreProd(initialState);
  }
}
