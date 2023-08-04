import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesAPI';
import { Image, List, ListItem, DescText, DescName } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async movieId => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieCredits(movieId);
  }, [movieId]);

  return (
    <>
      <List>
        {cast.map(({ id, profile_path, name, character }) => {
          const imagePath =
            profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`;
          return (
            <ListItem key={id}>
              <Image src={imagePath} alt={name} width="100" />
              <DescName>{name}</DescName>
              <DescText>Character: {character}</DescText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Cast;
