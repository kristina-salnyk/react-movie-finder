import { Heading } from './Home.styled';
import { getTrendingMovies } from '../../utils/api/getTrendingMovies';
import { getGenresList } from '../../utils/api/getGenresList';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
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
    if (genres.length === 0) return;

    (async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      }
    })();
  }, [genres]);

  return (
    <main>
      <Heading>Trending today</Heading>

      {trendingMovies.length > 0 && (
        <MoviesList
          items={trendingMovies}
          getGenresByIds={getGenresByIds}
        ></MoviesList>
      )}

      {error && <p>Something went wrong. Try again later.</p>}
    </main>
  );
};

export default Home;
