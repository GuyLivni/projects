import { createApiAction } from "../../../utils/testUtils";
import { LIFECYCLE } from "../../../redux/middlewares/api";
import reducer from "./movieReducer";
import { movieTypes } from "./";
import { movies } from "./movieMockData";

describe("movie reducer", () => {
  const initState = {
    movies: [],
    movieDetails: {}
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it("should handle GET_MOVIES and return movie list", () => {
    const action = createApiAction(LIFECYCLE.SUCCESS, {
      type: movieTypes.GET_MOVIES,
      payload: movies
    });

    expect(reducer(initState, action)).toEqual({
      movieDetails: {},
      movies: movies.Search
    });
  });
});
