/* @flow */
import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import type { Movie } from "Movie-types";
import Details from "../../components/movie/details";
import Loader from "../../components/common/loader";
import { movieActions } from "../../redux/state/movie";

type Props = {
  actions: Object,
  match: Object,
  movieDetails: Movie,
  loading: boolean
};

class ScreensMovieList extends Component<Props> {
  static defaultProps = {
    movieDetails: {}
  };

  componentDidMount() {
    const { actions, match } = this.props;
    actions.getMovie(match.params.id);
  }

  render() {
    //TODO: fix this shit
    return (
      <Fragment>
        {this.props.loading ? (
          <Loader />
        ) : (
          <Details {...this.props.movieDetails} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ movie }) => ({
  movieDetails: movie.movieDetails,
  loading: movie.loading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...movieActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreensMovieList);
