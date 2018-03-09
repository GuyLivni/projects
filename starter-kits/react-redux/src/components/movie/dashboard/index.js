/* @flow */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import type { Movies } from "Movie-types";
import { movieActions } from "../../../redux/state/movie";
import MovieList from "../list";

const MoviesContainer = styled(Container)`
  padding-top: 20px;
`;

type Props = {
  actions: Object,
  movie: Movies
};

class MoviesDashboard extends Component<Props> {
  componentDidMount() {
    this.props.actions.getMovies();
  }

  render() {
    return (
      <MoviesContainer>
        <MovieList movies={this.props.movie} />
      </MoviesContainer>
    );
  }
}

const mapStateToProps = ({ movie }) => ({
  movie
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...movieActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDashboard);
