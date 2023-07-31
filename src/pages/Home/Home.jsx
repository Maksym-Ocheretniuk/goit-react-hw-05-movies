import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/moviesAPI';
import { ThreeCircles } from 'react-loader-spinner';
import MovieList from 'components/MovieList/MovieList';
import { Container, Title, Loader } from './Home.styled';

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
      {loading && (
        <Loader>
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </Loader>
      )}
    </Container>
  );
};

export default Home;
