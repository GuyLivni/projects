/* eslint-disable no-undef */
import renderer from "react-test-renderer";
import React from "react";
import MovieItem from "./";

describe("MovieItem", () => {
  it("MovieItem ui renders correctly", () => {
    const tree = renderer
      .create(
        <MovieItem
          name="batman"
          summary="batman test"
          image="http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg"
          rating={22}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
