/* eslint-disable no-undef */
import renderer from 'react-test-renderer';
import React from 'react';
import { fromJS } from 'immutable';
import MovieList from './';

describe('Movie List', () => {
  it('MovieList ui renders correctly', () => {
    const tree = renderer.create(<MovieList shows={fromJS([])} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
