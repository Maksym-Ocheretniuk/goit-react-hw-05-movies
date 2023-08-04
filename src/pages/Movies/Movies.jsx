import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesAPI';

import MovieList from 'components/MovieList/MovieList';

import { ThreeCircles } from 'react-loader-spinner';

import {
  Container,
  SearchBtn,
  SearchForm,
  SearchInput,
  Loader,
} from './Movies.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const getSearchedMovies = async searchQuery => {
      try {
        setLoading(true);
        const { results } = await searchMovies(searchQuery);
        setSearchMovie(results);

        if (results.length === 0) {
          alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getSearchedMovies(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value.trim();
    if (searchValue === '') {
      return;
    }
    updateQueryString(searchValue);
  };

  const updateQueryString = name => {
    const nextParams = name !== '' ? { query: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput type="text" name="search" defaultValue={query} />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>

      <MovieList movies={searchMovie} />

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

export default Movies;
