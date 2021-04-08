import React, { Component } from 'react';
import movieApi from '../services/movieApi';
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await movieApi.fetchMovies();

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Популярные фильмы:</h1>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
