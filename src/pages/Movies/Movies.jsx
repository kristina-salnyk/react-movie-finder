import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchingMovie } from '../../utils/api/getSearchingMovie';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [error, setError] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery.trim() === '') return;

    (async () => {
      try {
        const data = await getSearchingMovie(searchQuery);
        setSearchingMovies(data.results);
      } catch (error) {
        setError(error);
      }
    })();
  }, [searchQuery]);

  const setSearchQuery = query => {
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  return (
    <main>
      <SearchForm searchQuery={searchQuery} onSubmit={setSearchQuery} />

      {searchingMovies.length > 0 && (
        <MoviesList items={searchingMovies}></MoviesList>
      )}

      {error && <p>Something went wrong. Try again later.</p>}
    </main>
  );
};

export default Movies;
