import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SingleBusinesses } from '../../store/business';
import {EditReview} from '../../store/business'

const EditReviewForm = ({ revieww, hideForm }) => {
  const dispatch = useDispatch();

  const [review,setReview] = useState(revieww?.answer)
  const [rating,setRating] = useState(revieww?.rating)


  useEffect(() => {
    dispatch(SingleBusinesses());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      review,
      rating,
    };

    let updatedReview = await dispatch(EditReview(payload));
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
      value={review}
      onChange={(e) => setReview(e.target.value)}
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
