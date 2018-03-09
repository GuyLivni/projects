/* eslint-disable no-undef */
import renderer from "react-test-renderer";
import React from "react";
import MovieList from "./";

describe("MovieList", () => {
  it("MovieList ui renders correctly", () => {
    const tree = renderer.create(<MovieList movies={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
