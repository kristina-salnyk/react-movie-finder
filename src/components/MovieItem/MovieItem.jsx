import { Description, Poster, Title, Link } from './MovieItem.styled';

const MovieItem = ({
  id,
  posterPath,
  title,
  release,
  genresIds,
  getGenresByIds,
}) => {
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`;
  const year = new Date(release).getFullYear();
  const genres = getGenresByIds(genresIds);

  return (
    <Link to={`/movies/${id}`}>
      <Poster src={poster} alt={title} />
      <Description>
        <Title>{title}</Title>
        <p>Year: {year}</p>
        <p>Genres: {genres}</p>
      </Description>
    </Link>
  );
};

export default MovieItem;
