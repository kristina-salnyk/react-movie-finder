import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../utils/api/getMovieById';
import { useEffect, useState } from 'react';
import {
  Container,
  Controls,
  Description,
  Overview,
  Poster,
  Title,
} from './MovieDetails.styled';
import imageNotFound from '../../images/image-not-found.png';
import { BsArrowLeft } from 'react-icons/bs';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  if (!movie) {
    return <p>Something went wrong. Try again later.</p>;
  }

  const poster = movie['poster_path']
    ? `https://image.tmdb.org/t/p/w500${movie['poster_path']}`
    : imageNotFound;
  const year = new Date(movie['release_date']).getFullYear();
  const score = (Number(movie['vote_average']) * 10).toFixed();
  const genres = movie['genres'].map(genre => genre.name).join(' ');

  return (
    <main>
      <Container>
        <Controls>
          <Link to={backLinkHref}>
            <BsArrowLeft /> Go back
          </Link>
        </Controls>

        <Description>
          <Poster src={poster} alt={movie['original_title']} />

          <Overview>
            <Title>
              {movie['original_title']}
              {!isNaN(year) && <span> ({year})</span>}
            </Title>

            <p>User score: {score}%</p>

            <h2>Overview</h2>
            <p>{movie['overview']}</p>

            <h2>Genres</h2>
            <p>{genres}</p>
          </Overview>
        </Description>
      </Container>

      {error && <p>Something went wrong. Try again later.</p>}
    </main>
  );
};

export default MovieDetails;
