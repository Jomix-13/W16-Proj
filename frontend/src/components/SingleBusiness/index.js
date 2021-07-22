import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'

import {SingleBusinesses} from '../../store/business'
import {addReview} from '../../store/business'
import SingelReview from '../SingleReview'


// import * as reviewActions from '../../store/reviews'
import './single.css';

function OneBusiness(){
    const dispatch = useDispatch()
    const {businessId} = useParams()
     
    const sessionUser = useSelector((state) => state.session.user);
    const businesses = useSelector(state => Object.values(state.businesses));
    
    

    
    const business = businesses.find(business => business.id === Number(businessId))
    console.log(business)
    // const rereviews = business?.Reviews

    // const rereview = rereviews.find(rerview => rerview.id === review.id)
    // const postusername = rereview.User.username

    
    
    const [review,setReview] = useState('')
    const [rating,setRating] = useState('')
    const [errors,setErrors] = useState('')    
    
    useEffect(() => {
      dispatch(SingleBusinesses(businessId))
      // dispatch(getBusinesses())
    },[dispatch, businessId])
    
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
        return dispatch(addReview({ review, rating, businessId , userId}))
      }

  return(
    <>
      {!!business &&(
        <div>
          <ul className='title'>{business.title}</ul>
          <ul className='type'>{business.description}</ul>
          <li>Address :{business.address} {business.city},{business.state}.{business.zipCode}</li>
          <img className='busimage' src={`/images/${business.title}.jpeg`} alt=''></img>
          <form 
          hidden={sessionUser? false : true}
          onSubmit={formHandeler}
          >
            <ul className='errors'>
            {!!errors && errors.map(error=>(
                <li key={error}>{error}</li>
            ))}
            </ul>
              <label className='reviewLable'>Review
               <input
                placeholder="place your review here.."
                className='signupInput'
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                />
              </label>
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
              <button
              disabled={errors.length ? true : false}
              type="submit"
              >
              Add Review</button>
          </form>

        <div hidden={!!business?.Reviews?.length ? false : true} className='reviews' >Reviews</div>
        <div hidden={!!business?.Reviews?.length ? true : false} className='reviews' >No reviews available</div>
        {business.Reviews.length > 0 && business.Reviews.map(review => (
          <SingelReview review={review}></SingelReview>
        ))}
        </div>
      )}
    </>
  )
}

export default OneBusiness