import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from './actions';

class SelectedMovie extends Component {
  componentDidMount() {
    const title = this.props.match.params.title;
      const movie = this.props.movies.filter(movie => movie.title === title)[0];
        if (movie === undefined) return;
        this.props.selectMovie(movie);
  }
  render() {
    if (this.props.selectedMovie === undefined) return (<div>404</div>);
    return (
      <div>
        <h1>{this.props.selectedMovie.title}</h1>
        <h2>{this.props.selectedMovie.year}</h2>
        <h3>{this.props.selectedMovie.minRecommendedAge}</h3>
        <h3>{this.props.selectedMovie.genre}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, { selectMovie })(SelectedMovie);
