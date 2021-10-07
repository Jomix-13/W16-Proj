import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'

import {SingleBusinesses} from '../../store/0business'
import {getReviews,addReview,EditReview,DeleteReview} from '../../store/0review'
// import {SingleBusinesses} from '../../store/business'
// import {addReview} from '../../store/business'
import SingelReview from '../SingleReview'
import Singelbus from '../singlbus'


// import * as reviewActions from '../../store/reviews'
import './single.css';

function OneBusiness(){

  const history=useHistory()

    const dispatch = useDispatch()
    const {businessId} = useParams()
    const sessionUser = useSelector((state) => state.session.user);
    const business = useSelector(state => state.business.oneBusiness);  
    // const business = useSelector(state => state.businesses.oneBusiness);  
    const reviews = useSelector(state => state.review.allReviews); 
    
    
    const [review,setReview] = useState('')
    const [rating,setRating] = useState('')
    const [errors,setErrors] = useState('')    
    
    useEffect(() => {
      dispatch(SingleBusinesses(businessId))
      dispatch(getReviews())
    },[dispatch])
    
    useEffect(() => {
      const errorHandler=[]
      if(!review) errorHandler.push('Please enter your review')
      if(review.length < 10) errorHandler.push('Your review needs to be more than 10 charachters')
      if(rating < 1 || rating > 5 || !rating ) errorHandler.push('Rating value must be between 1-5')
      setErrors(errorHandler)
    },[review, rating])
    
    function formHandeler(e){
      e.preventDefault()
      const userId = sessionUser.id
      setReview('')
      setRating('')
      dispatch(addReview({ review, rating, businessId , userId}))
      // history.push(`/${businessId}`)
      }

    function reviewAvrage(reviews){
      let total = 0
      let sum = 0
      // console.log('reviews',reviews)
      for (let i = 0; i < reviews.length;i++){
        // console.log('reviews',reviews)
        if (reviews[i].businessId === business.id){
          // console.log('review 1',reviews[i])
          // console.log('rating',reviews[i].rating)
          total = total+reviews[i].rating
          sum ++
        }
        if (sum === 0){
          return 'No rating available'
        }
      }
      return `${total/sum} ⭐️`
    }

  return(
    <>
      {!!business &&(
        <div>
          <ul className='title'>{business.title}</ul>
          <ul className='type'>{business.description}</ul>
          <ul className='rating'>Over all rating : {reviewAvrage(reviews)} </ul>
          <li className='add'>Address :{business.address} {business.city},{business.state}.{business.zipCode}</li>
          <img className='busimage' src={business.image} alt=''></img>
          <Singelbus></Singelbus>
          <form 
          hidden={sessionUser? false : true}
          onSubmit={formHandeler}
          >
            <ul className='error'>
            {!!errors && errors.map(error=>(
                <li key={error}>{error}</li>
            ))}
            </ul>
            <div>
              <label className='reviewLable'>Review
               <input
                placeholder="Please tell us your experience.."
                className='signupInput'
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                />
              </label>
              </div>
              <div>
              <label className='reviewLable'>Rating
                <input
                placeholder="1 - 5"
                className='reviewInput'
                type="number"
                max='5'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                />
              </label>
              </div>
              <div>
              <button
              disabled={errors.length ? true : false}
              type="submit"
              >
              Add Review</button>
              </div>
          </form>
        <div>
            <SingelReview className='singleReview' key={review.id} review={review}></SingelReview>
          </div>
        </div>
      )}
    </>
  )
}

export default OneBusiness