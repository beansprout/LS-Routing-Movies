import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Movies extends Component {
    render() {
        return (
          <div>
            <ul>
              { this.props.movies.map((movie, i) => {
                  return (
                    <li key={i}>
                        <Link to={ `movies/$
                          {movie.title}`}>
                          {movie.title}</Link>
                    </li>
                  );
              })}
            </ul>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps)(Movies);
