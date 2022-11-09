import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchingMovie } from '../../utils/api/getSearchingMovie';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [error, setError] = useState();

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
