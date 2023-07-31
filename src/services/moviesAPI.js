import axios from 'axios';

const API_KEY = '5b118f85943ac147f1d0de5fe4eeda94';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data;
};
