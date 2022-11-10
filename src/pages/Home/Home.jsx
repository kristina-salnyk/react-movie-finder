import { Title } from './Home.styled';
import { getTrendingMovies } from '../../utils/api/getTrendingMovies';
import { useEffect, useState } from 'react';
import { MESSAGE_TYPES } from '../../constants';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    setIsLoading(true);

    (async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <section>
      <Title>Trending today</Title>

      {trendingMovies.length > 0 && (
        <MoviesList items={trendingMovies}></MoviesList>
      )}

      {isLoading && <Loader />}

      {!isLoading && error && <Message type={MESSAGE_TYPES.ERROR} />}
    </section>
  );
};

export default Home;
