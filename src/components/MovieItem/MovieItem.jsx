import { Description, Poster, Title, Link } from './MovieItem.styled';
import imageNotFound from 'images/image-not-found.png';
import { useGenres } from '../../contexts/GenresContext';
import { useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../constants';
import PropTypes from 'prop-types';

const MovieItem = ({ id, posterPath, title, release, genresIds }) => {
  const { getGenresByIds } = useGenres();
  const location = useLocation();

  const poster = posterPath ? `${IMAGE_URL}${posterPath}` : imageNotFound;
  const year = new Date(release).getFullYear();
  const genres = getGenresByIds(genresIds);

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <Poster src={poster} alt={title} />
      <Description>
        <Title>{title}</Title>
        {!isNaN(year) && <p>Year: {year}</p>}
        {genres !== '' && <p>Genres: {genres}</p>}
      </Description>
    </Link>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  genresIds: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string,
  release: PropTypes.string,
  title: PropTypes.string.isRequired,
};
