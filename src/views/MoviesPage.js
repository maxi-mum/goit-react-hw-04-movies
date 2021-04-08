import React, { Component } from 'react';
import movieApi from '../services/movieApi';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;
    if (pathname && search) {
      this.setState({ searchQuery: search.slice(7) });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery } = this.state;
      const response = await movieApi.fetchSearch({ searchQuery });
      const data = response.data.results;
      this.setState({
        movies: data,
      });
    }
  }
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
    });
    this.props.history.push({
      ...this.props.location,
      search: `?query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {movies && <MoviesList movies={movies} />}
      </>
    );
  }
}
export default MoviesPage;
