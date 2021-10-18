import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';


import {EditReview} from '../../store/0review'
import {getReviews} from '../../store/0review'

import './editreview.css'
const EditReviewForm = ({ setShowModal,id}) => {
  
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.review.allReviews);
let rev = reviews.filter(rev=>rev.id === id)


  const [review,setReview] = useState(rev[0].answer)
  const [rating,setRating] = useState(rev[0].rating)
  const [errors,setErrors] = useState([])

  useEffect(() => {
    const errorHandler=[]
    if(!review) errorHandler.push('Review can not be blank')
    if(review?.length < 10) errorHandler.push('Your review needs to be more than 10 charachters')
    if(rating < 1 || rating > 5 || !rating ) errorHandler.push('Rating value must be between 1-5')
    setErrors(errorHandler)
  },[review, rating,dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id,
      review,
      rating,
    };
    let updatedReview = await dispatch(EditReview(payload));
    if (updatedReview) {
    dispatch(getReviews())
    //   hideForm(false);
    setShowModal(false);
    }else{
    setShowModal(true)
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <section className="form-content">
      <form onSubmit={handleSubmit}>
      <div className='form-error-div'>
      <ul className='error'>
            {!!errors && errors.map(error=>(
                <li key={error}>{error}</li>
            ))}
      </ul>
      </div>
      <div className='form-all-inputs-container'>
      <textarea
      className='form-input'
      type="text"
      value={review}
      onChange={(e) => setReview(e.target.value)}
      />
      <input
      className='form-input'
      type="number"
      max='5'
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      />
      </div>
      <div className='modalbuttons'>
      <div>
        <button 
        type="submit"
        disabled={errors.length ? true : false}
        >
          Update Review
        </button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </div>
      </div>
      </form>
    </section>
    );
};

export default EditReviewForm;
