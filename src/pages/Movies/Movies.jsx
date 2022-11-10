import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';
import { getSearchingMovie } from '../../utils/api/getSearchingMovie';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import getMessageType from '../../utils/getMessageType';

const Movies = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery.trim() === '') return;

    setIsLoading(true);

    (async () => {
      try {
        const data = await getSearchingMovie(searchQuery);
        setSearchingMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setError(null);
      setSearchingMovies([]);
    };
  }, [searchQuery]);

  const setSearchQuery = query => {
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  const params = {
    hasError: error,
    hasResults: searchingMovies.length > 0,
    hasSearchQuery: searchQuery.trim() !== '',
  };
  const messageType = getMessageType(params);

  return (
    <section>
      <SearchForm searchQuery={searchQuery} onSubmit={setSearchQuery} />

      {searchingMovies.length > 0 && (
        <MoviesList items={searchingMovies}></MoviesList>
      )}

      {isLoading && <Loader />}

      {!isLoading && messageType && <Message type={messageType} />}
    </section>
  );
};

export default Movies;
