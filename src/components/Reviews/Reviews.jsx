import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../utils/api/getMovieReviews';
import { Description, ReviewItem, ReviewsList, Title } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieReviews(movieId);
        console.log(data);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  return (
    <section>
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

      {error && <p>Something went wrong. Try again later.</p>}
    </section>
  );
};

export default Reviews;
