import { List, ListItem } from './MoviesList.styled';
import MovieItem from '../MovieItem';
import PropTypes from 'prop-types';

const MoviesList = ({ items }) => {
  return (
    <List>
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
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
