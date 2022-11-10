import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import {
  Controls,
  Overview,
  Poster,
  Title,
  Link,
  Tabs,
  MovieCard,
  Details,
} from './MovieDetails.styled';
import { getMovieById } from '../../utils/api/getMovieById';
import imageNotFound from '../../images/image-not-found.png';
import { BsArrowLeft } from 'react-icons/bs';
import { IMAGE_URL } from '../../constants';
import getMessageType from '../../utils/getMessageType';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setError(null);
      setMovie(null);
    };
  }, [movieId]);

  const params = {
    hasError: error,
    hasResults: movie,
  };
  const messageType = getMessageType(params);

  const poster = movie?.['poster_path']
    ? `${IMAGE_URL}${movie?.['poster_path']}`
    : imageNotFound;
  const year = new Date(movie?.['release_date']).getFullYear();
  const score = (Number(movie?.['vote_average']) * 10).toFixed();
  const genres = movie?.genres.map(genre => genre.name).join(', ');

  return (
    <section>
      <Controls>
        <Link to={backLink}>
          <BsArrowLeft /> Go back
        </Link>
      </Controls>

      {movie && (
        <>
          <MovieCard>
            <Poster src={poster} alt={movie?.['original_title']} />
            <Overview>
              <Title>
                {movie?.['original_title']}
                {!isNaN(year) && <span> ({year})</span>}
              </Title>
              <p>User score: {score}%</p>
              <h2>Overview</h2>
              <p>{movie?.overview}</p>
              {genres !== '' && (
                <>
                  <h2>Genres</h2>
                  <p>{genres}</p>
                </>
              )}
            </Overview>
          </MovieCard>
          <hr />
          <Details>
            <h2>Additional information</h2>
            <Tabs>
              <Link to="cast" state={{ from: backLink }}>
                Cast
              </Link>
              <Link to="reviews" state={{ from: backLink }}>
                Reviews
              </Link>
            </Tabs>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Details>
        </>
      )}

      {isLoading && <Loader />}

      {!isLoading && messageType && <Message type={messageType} />}
    </section>
  );
};

export default MovieDetails;
