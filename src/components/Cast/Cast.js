import React, { Component } from 'react';
import axios from 'axios';
import s from './Cast.module.css';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';

class Cast extends Component {
  state = {
    cast: [
      {
        name: null,
        character: null,
        profile_path: null,
        cast_id: null,
      },
    ],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `movie/${movieId}/credits${API_KEY}&language=en-US`,
    );

    this.setState({ ...response.data });
  }
  render() {
    return (
      <>
        <h1>Компонент актеров</h1>
        <ul className={s.actorsList}>
          {this.state.cast.map(actor => {
            const profileUrl = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
            return (
              <li key={actor.cast_id}>
                {actor.profile_path && (
                  <img
                    className={s.actorImg}
                    src={profileUrl}
                    alt={actor.name}
                  />
                )}
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
