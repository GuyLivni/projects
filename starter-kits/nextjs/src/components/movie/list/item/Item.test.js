/* eslint-disable no-undef */
import renderer from 'react-test-renderer';
import MovieItem from './';

describe('Movie item component', () => {
  it('MovieItem ui renders correctly', () => {
    const tree = renderer
      .create(
        <MovieItem
          id={1}
          image="https://www.chapter.org/sites/default/files/production/banner/LEGO%20Batman-%20Banner.jpg"
          name="Lego Batman"
          language="German"
          rating={10}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
