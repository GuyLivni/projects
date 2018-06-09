import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MovieList from "../../components/movie/list";
import { movieActions } from "../../redux/state/movie";
import type { Movies } from "Movie-types";

type Props = {
  actions: Object,
  movies: Movies
};
class ScreensHome extends Component<Props> {
  componentDidMount() {
    this.props.actions.getMovies("Batman");
  }

  render() {
    return <MovieList movies={this.props.movies} />;
  }
}

const mapStateToProps = ({ movie }) => ({
  movies: movie.movies
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...movieActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreensHome);
