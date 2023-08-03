import axios from 'axios';

const API_KEY = '5b118f85943ac147f1d0de5fe4eeda94';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const searchMovies = async searchQuery => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return data;
};
