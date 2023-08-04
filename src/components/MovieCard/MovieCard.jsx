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
    'https://play-lh.googleusercontent.com/c_RFVsWfu89ctt7B6smzohv5UBVietoRji26alQNBlOJP6if4LzJAkL3Bw-2MxvuUKk';
  const userScore = Math.round((vote_average * 100) / 10);

  return (
    movieDetails && (
      <Container>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={500}
          alt="poster"
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

export default MovieCard;
