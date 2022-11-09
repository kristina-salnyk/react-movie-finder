import { Container, ListItem } from './MoviesList.styled';
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = ({ items }) => {
  return (
    <Container>
      {items.map(item => (
        <ListItem key={item.id}>
          <MovieItem
            id={item.id}
            posterPath={item['poster_path']}
            title={item['original_title']}
            release={item['release_date']}
            genresIds={item['genre_ids']}
          />
        </ListItem>
      ))}
    </Container>
  );
};

export default MoviesList;
