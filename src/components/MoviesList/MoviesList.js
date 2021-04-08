import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './MovieList.module.css';

const MoviesList = ({ movies, location }) => {
  // console.log('location:', location);
  // console.log('props:', this.props);
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li className={s.listEl} key={movie.id}>
          <Link
            className={s.links}
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.name || movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
