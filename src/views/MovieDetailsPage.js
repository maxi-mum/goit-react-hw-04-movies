import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import movieApi from '../services/movieApi';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';
import s from './DetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    original_title: null,
    overview: null,
    poster_path: null,
    release_date: null,
    title: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieApi.fetchMovie(movieId);
    console.log(this.props.location);

    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    return history.push(routes.home);
  };

  render() {
    const {
      poster_path,
      original_title,
      title,
      overview,
      release_date,
    } = this.state;

    const { match } = this.props;
    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
      <>
        <button type="button" className={s.button} onClick={this.handleGoBack}>
          Вернуться назад
        </button>
        {/* <h1>Это страница фильма {match.params.movieId}</h1> */}
        {poster_path && (
          <img
            className={s.actorsImg}
            src={imageUrl}
            alt={original_title}
          ></img>
        )}
        <h2>{original_title || title}</h2>
        <p>{overview}</p>
        <p>{release_date}</p>
        <NavLink
          to={{
            pathname: `${match.url}/cast`,
            state: { ...this.props.location.state },
          }}
        >
          <p>Cast</p>
        </NavLink>
        <NavLink
          to={{
            pathname: `${match.url}/reviews`,
            state: { ...this.props.location.state },
          }}
        >
          <p>Reviews</p>
        </NavLink>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
