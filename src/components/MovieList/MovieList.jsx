import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, ListItem, StyledLink, Image } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const defaultImg =
    'https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg?w=2000';

  const handleLoadImage = () => {
    setLoading(false);
  };

  return (
    <>
      <List>
        {movies?.map(({ id, title, name, poster_path }) => (
          <ListItem key={id}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={150}
              alt="poster"
              onLoad={handleLoadImage}
              style={{ display: loading ? 'none' : 'block' }}
            />
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {title ?? name}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default MovieList;
