import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  DescMovie,
  DescSubtitle,
  DescText,
  Image,
  Title,
} from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres, name } =
    movieDetails;

  const getGenres = () => {
    return genres?.map(({ name }) => name).join(' ');
  };
  
  const defaultImg =
    'https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg?w=2000';

  const userScore = Math.round((vote_average * 100) / 10);
  const [loading, setLoading] = useState(true);

  const handleLoadImage = () => {
    setLoading(false);
  };

  return (
    movieDetails && (
      <Container>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={300}
          alt="poster"
          onLoad={handleLoadImage}
          style={{ display: loading ? 'none' : 'block' }}
        />

        <DescMovie>
          <Title>{title || name}</Title>
          <DescText> User Score: {userScore}</DescText>
          <DescSubtitle>Overview</DescSubtitle>
          <DescText>{overview}</DescText>
          <DescSubtitle>Genres</DescSubtitle>
          <DescText>{getGenres()}</DescText>
        </DescMovie>
      </Container>
    )
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieCard;
