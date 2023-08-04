import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, ListItem, StyledLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies?.map(({ id, title, name }) => (
          <ListItem key={id}>
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
