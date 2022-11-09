import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../utils/api/getMovieCredits';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';
import CastItem from '../CastItem/CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  return (
    <section>
      {cast.length > 0 && (
        <CastList>
          {cast.map(item => (
            <li key={item.id}>
              <CastItem
                profilePath={item['profile_path']}
                name={item.name}
                character={item.character}
              />
            </li>
          ))}
        </CastList>
      )}

      {error && <p>Something went wrong. Try again later.</p>}
    </section>
  );
};

export default Cast;
