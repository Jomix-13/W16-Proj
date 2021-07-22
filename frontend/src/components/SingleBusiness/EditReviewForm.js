import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SingleBusinesses } from '../../store/business';
import {EditReview} from '../../store/reviews'

const EditReviewForm = ({ review, hideForm }) => {
  const dispatch = useDispatch();

  const [answer,setAnswer] = useState(review.answer)
  const [rating,setRating] = useState(review.rating)


  useEffect(() => {
    dispatch(SingleBusinesses());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedReview = await dispatch(EditReview({review,rating}));
    if (updatedReview) {
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="edditReviewForm">
      <form onSubmit={handleSubmit}>
      <input
      placeholder="place your review here.."
      className='signupInput'
      type="text"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      />
      <input
      placeholder="1 - 5"
      className='reviewInput'
      type="number"
      max='5'
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      />
        <button type="submit">Update Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default EditReviewForm;
