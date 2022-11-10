import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../utils/api/getMovieReviews';
import { Description, ReviewItem, ReviewsList, Title } from './Reviews.styled';
import getMessageType from '../../utils/getMessageType';
import Loader from '../Loader';
import Message from '../Message';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setError(null);
      setReviews([]);
    };
  }, [movieId]);

  const params = {
    hasError: error,
    hasResults: reviews.length > 0,
  };
  const messageType = getMessageType(params);

  return (
    <div>
      {reviews.length > 0 && (
        <ReviewsList>
          {reviews.map(item => (
            <li key={item.id}>
              <ReviewItem>
                <Title>Author: {item.author}</Title>
                <Description>{item.content}</Description>
              </ReviewItem>
            </li>
          ))}
        </ReviewsList>
      )}

      {isLoading && <Loader />}

      {!isLoading && messageType && <Message type={messageType} />}
    </div>
  );
};

export default Reviews;
