/* eslint-disable no-undef */
import { makeApiAction } from "../../../utils/testUtils";
import { LIFECYCLE } from "../../../redux/middlewares/api";
import reducer from "./movieReducer";
import { movieTypes } from "./";

describe("user reducer", () => {
  const initState = [];

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it("should handle GET_MOVIES and return correct result", () => {
    const movies = [
      {
        score: 22.34,
        show: {
          id: 1,
          language: "English",
          name: "Batman"
        }
      },
      {
        score: 12.34,
        show: {
          id: 2,
          language: "German",
          name: "Batman unlimited"
        }
      }
    ];

    const action = makeApiAction(LIFECYCLE.SUCCESS, {
      type: movieTypes.GET_MOVIES,
      payload: movies
    });

    expect(reducer(initState, action)).toEqual(movies);
  });
});