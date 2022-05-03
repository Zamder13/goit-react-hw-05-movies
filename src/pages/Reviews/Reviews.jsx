import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'components/api/api';
import { List, Wrapper, BadResult } from './Reviews.styled.jsx';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getFilmReviews(movieId).then(({ data }) => setReviews(data.results));
  }, [movieId]);

  return (
    <Wrapper>
      <h3>Reviews</h3>
      {reviews.length > 1 ? (
        <List>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
              <p>{review.updated_at}</p>
            </li>
          ))}
        </List>
      ) : (
        <BadResult>{`No reviews yet :(`}</BadResult>
      )}
    </Wrapper>
  );
};

export default Reviews;
