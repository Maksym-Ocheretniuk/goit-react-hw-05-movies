import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import MovieCard from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'services/moviesAPI';
import Loader from 'components/Loader/Loader';

import {
  AddInfo,
  Container,
  StyledLinkBtn,
  Title,
  StyledLink,
} from './MovieDetails.styled';
import { List, ListItem } from 'components/MovieList/MovieList.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      try {
        setLoading(true);
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <Container>
      <StyledLinkBtn to={backLinkLocationRef.current}>
        &larr; Go back
      </StyledLinkBtn>

      {loading ? Loader : <MovieCard movieDetails={movieDetails} />}

      <AddInfo>
        <Title>Additional information</Title>

        <List>
          <ListItem>
            <StyledLink to="cast" state={backLinkLocationRef.current}>
              Cast
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </AddInfo>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
