import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';

const fetchMovies = () => {
  return axios.get(`trending/movie/day${API_KEY}`);
};

const fetchSearch = ({ searchQuery = '' }) => {
  return axios.get(
    `search/movie${API_KEY}&language=en-US&include_adult=false&query=${searchQuery}`,
  );
};

const fetchMovie = movieId => {
  return axios.get(`movie/${movieId}images${API_KEY}&language=en-US`);
};

const movieApi = {
  fetchMovies,
  fetchSearch,
  fetchMovie,
};
export default movieApi;
