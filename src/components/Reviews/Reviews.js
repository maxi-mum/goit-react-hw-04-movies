import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';

class Reviews extends Component {
  state = {
    results: [{ author: null, content: null, id: null }],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `movie/${movieId}/reviews${API_KEY}&language=en-US&page=1`,
    );

    this.setState({ ...response.data });
  }
  render() {
    return (
      <>
        <h1>Компонент рецензий</h1>
        <ul>
          {this.state.results.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
