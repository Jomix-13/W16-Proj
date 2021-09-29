import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// import { SingleBusinesses } from '../../store/business';
// import {EditReview} from '../../store/business'
import {EditReview} from '../../store/0review'

const EditReviewForm = ({ revieww, hideForm }) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [review,setReview] = useState(revieww?.answer)
  const [rating,setRating] = useState(revieww?.rating)
  const [errors,setErrors] = useState([])

  useEffect(() => {
    const errorHandler=[]
    if(!review) errorHandler.push('Please enter your review')
    if(review.length < 10) errorHandler.push('Your review needs to be more than 10 charachters')
    if(rating < 1 || rating > 5 || !rating ) errorHandler.push('Rating value must be between 1-5')
    setErrors(errorHandler)
  },[review, rating,dispatch])

  const id = revieww.id
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id,
      review,
      rating,
    };
    let updatedReview = await dispatch(EditReview(payload));
    if (updatedReview) {
      hideForm(false);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm(false);
  };

  return (
    <section className="edditReviewForm">
      <form onSubmit={handleSubmit}>
      <ul className='error'>
            {!!errors && errors.map(error=>(
                <li key={error}>{error}</li>
            ))}
      </ul>
      <input
      className='signupInput'
      type="text"
      value={review}
      onChange={(e) => setReview(e.target.value)}
      />
      <input
      className='reviewInput'
      type="number"
      max='5'
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      />
        <button 
        type="submit"
        disabled={errors.length ? true : false}
        >
          Update Review
        </button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default EditReviewForm;
