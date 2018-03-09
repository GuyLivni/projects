import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../../components/common/Layout';
import { movieActions, movieSelectors } from '../../redux/state/movie';
import MovieList from '../../components/movie/list';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class ScreensMovieList extends React.Component {
  static async getInitialProps({ store, isServer }) {
    await store.dispatch(movieActions.getMovies());

    return { isServer };
  }

  render() {
    return (
      <Layout>
        <Container>
          <h1>Batman TV Shows</h1>
          <MovieList shows={this.props.shows} />
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  shows: movieSelectors.selectMovies(state.get('movie')),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...movieActions,
    },
    dispatch,
  ),
});

ScreensMovieList.propTypes = {
  shows: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreensMovieList);
