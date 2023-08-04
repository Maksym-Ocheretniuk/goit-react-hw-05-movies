import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'services/moviesAPI';
import Loader from 'components/Loader/Loader';

import MovieList from 'components/MovieList/MovieList';

import { Container, Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList movies={trendingMovies} />
      {loading && Loader}
    </Container>
  );
};

export default Home;
