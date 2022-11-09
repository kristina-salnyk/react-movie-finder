import { Heading } from './Home.styled';
import { getTrendingMovies } from '../../utils/api/getTrendingMovies';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <main>
      <Heading>Trending today</Heading>

      {trendingMovies.length > 0 && (
        <MoviesList items={trendingMovies}></MoviesList>
      )}

      {error && <p>Something went wrong. Try again later.</p>}
    </main>
  );
};

export default Home;
