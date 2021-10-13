import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

import {SingleBusinesses} from '../../store/0business'
import {getReviews,addReview} from '../../store/0review'

import SingelReview from '../SingleReview'
import Singelbus from '../singlbus'


import './single.css';

function OneBusiness(){

  const dispatch = useDispatch()
  const {businessId} = useParams()

  const sessionUser = useSelector((state) => state.session.user);
  const business = useSelector(state => state.business.oneBusiness);  
  const reviews = useSelector(state => state.review.allReviews); 
  
  const [review,setReview] = useState('')
  const [rating,setRating] = useState('')
  const [errors,setErrors] = useState('')    
  const [avrage,setAvrage] = useState('')    
  
  useEffect(() => {
    dispatch(SingleBusinesses(businessId))
    dispatch(getReviews())
    console.log('COMP',reviews)
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
    }
  
  function reviewAvrage(reviews){
    let total = 0
    let sum = 0
    console.log('reviews',reviews)
    for (let i = 0; i < reviews.length;i++){
      if (reviews[i].businessId === business.id){
        total = total+reviews[i].rating
        sum ++
      }

    }
    if (sum === 0){
      return 'No rating available'
    }else{
    let avrage = Math.round( (total/sum) * 10) / 10
    return avrage + ' ⭐️'
    }
  }

  return(
    <>
      {!!business &&(
        <div>
          <div className='infoContainer'>
          <div className='title'>{business.title}</div>
          <div className='type'>{business.description}</div>
          <div className='rating'>Over all rating : {reviewAvrage(reviews)} </div>
          <div className='add'>Address :{business.address} {business.city},{business.state}.{business.zipCode}</div>
          <img className='busimage' src={business.image} alt=''></img>
          </div>
          <Singelbus></Singelbus>
          <div>
            <SingelReview className='singleReview' key={review.id} review={review}></SingelReview>
          </div>
          {sessionUser ? 
          <form 
          // hidden={sessionUser ? false : true}
          onSubmit={formHandeler}
          >
            <ul className='error'>
            {!!errors && errors.map(error=>(
                <li key={error}>{error}</li>
            ))}
            </ul>
            
            <div className='lablediv'>
            <div className='lablesubdiv'>
              <label className='reviewLable'>Review</label>
               <textarea
                placeholder="Please tell us your experience.."
                className='signupInput'
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                />
              
              </div>
              <div className='lablesubdiv'>
              <label className='reviewLable'>Rating</label>
                <input
                placeholder="1 - 5"
                className='reviewInput'
                type="number"
                max='5'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                />
              
              </div>
              <div id='AddReviewDiv' >
              <button
              disabled={errors.length ? true : false}
              type="submit"
              id='AddReview'
              >
              Add Review</button>
              </div>
              </div>
                
          </form>
          : 
          <div className='revTitle'>
            Please Log in to add a review
          </div>
          }

        </div>
      )}
    </>
  )
}

export default OneBusiness