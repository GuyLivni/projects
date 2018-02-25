import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../components/common/layout';
import { movieActions, movieSelectors } from '../redux/state/movie/';

class Movie extends React.Component {
  static async getInitialProps({ store, isServer, query }) {
    const { id } = query;
    await store.dispatch(movieActions.getMovie(id));

    return { isServer };
  }

  render() {
    return this.props.show.get('name') ? (
      <Layout>
        <h1>{this.props.show.get('name')}</h1>
        <p>{this.props.show.get('summary').replace(/<[/]?p>/g, '')}</p>
        <img alt="poster" src={this.props.show.getIn(['image', 'medium'])} />
      </Layout>
    ) : (
      <div>still loading </div>
    );
  }
}

const mapStateToProps = state => ({
  show: movieSelectors.selectMovie(state.get('movie')),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...movieActions,
    },
    dispatch,
  ),
});

Movie.propTypes = {
  show: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
