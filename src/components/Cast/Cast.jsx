import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../utils/api/getMovieCredits';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';
import CastItem from '../CastItem';
import getMessageType from '../../utils/getMessageType';
import Loader from '../Loader';
import Message from '../Message';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setError(null);
      setCast([]);
    };
  }, [movieId]);

  const params = {
    hasError: error,
    hasResults: cast.length > 0,
  };
  const messageType = getMessageType(params);

  return (
    <div>
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

      {isLoading && <Loader />}

      {!isLoading && messageType && <Message type={messageType} />}
    </div>
  );
};

export default Cast;
