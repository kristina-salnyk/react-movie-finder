import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchingMovie } from '../../utils/api/getSearchingMovie';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getGenresList } from '../../utils/api/getGenresList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const getGenresByIds = genreIds => {
    return genreIds
      .map(id => {
        const genre = genres.find(item => item.id === id);
        return genre.name;
      })
      .join(', ');
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getGenresList();
        setGenres(data.genres);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

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
        <MoviesList
          items={searchingMovies}
          getGenresByIds={getGenresByIds}
        ></MoviesList>
      )}

      {error && <p>Something went wrong. Try again later.</p>}
    </main>
  );
};

export default Movies;
