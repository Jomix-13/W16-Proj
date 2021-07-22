import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

import {SingleBusinesses} from '../../store/business'
import {getBusinesses} from '../../store/business'


import * as reviewActions from '../../store/reviews'
import './single.css';

function OneBusiness(){
    const dispatch = useDispatch()
    const {businessId} = useParams()
     
    const sessionUser = useSelector((state) => state.session.user);
    
    
    const businesses = useSelector(state => Object.values(state.businesses));
    
    const business = businesses.find(business => business.id === Number(businessId))
    console.log(business)

    const reviwwwwes = Object.assign({},business?.Reviews)
    console.log(reviwwwwes)
    
    
    const [review,setReview] = useState('')
    const [rating,setRating] = useState('')
    const [errors,setErrors] = useState('')
    
    
    
    useEffect(() => {
      const errorHandler=[]
      if(!review) errorHandler.push('Please enter your review')
      if(review.length < 10) errorHandler.push('Your review needs to be more than 10 charachters')
      if(rating < 1 || rating > 5 || !rating ) errorHandler.push('Rating value must be between 1-5')
      // if(typeof(rating) !== 'number' ) errorHandler.push('Rating value must be NUMBER between 1-5')
      //   || typeof(rating) !== 'number'
      setErrors(errorHandler)
    },[review, rating])
    
    useEffect(() => {
      dispatch(SingleBusinesses(businessId))
      dispatch(getBusinesses())
    },[dispatch, businessId])
    
    function formHandel(e){
        const userId = sessionUser.id

        // review = ''
        // rating = ''
        return dispatch(reviewActions.addReview({ review, rating, businessId , userId}))
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
                          onSubmit={formHandel}
                        >
                      <ul 
                      className='errors'
                      >
                          {!!errors && errors.map(error=>(
                              <li key={error}>{error}</li>
                          ))}
                      </ul>
                      <label className='reviewLable'>
                        Review
                        <input
                          placeholder="place your review here.."
                          className='signupInput'
                          type="text"
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                        />
                      </label>
                      <label className='reviewLable'>
                        Rating
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
             {/* <div hidden={business.Reviews ? true : false}>No reviews available</div> */}
            {!!business.Reviews && business.Reviews.map(review => (
              <div  className='o' key={review.id}>
                    <ul>{business?.Reviews?.User?.username} :{review.answer} -- {review.rating} ⭐️</ul>
            {sessionUser && sessionUser.id === review.userId && (    
            <div className='container'>
                <button 
                className='2'
                // hidden={!!sessionUser && sessionUser.id === review.userId ? false : true}
                className='small'>
                    Delete review
                </button>
                <button 
                className='3'
                // hidden={!!sessionUser && sessionUser.id === review.userId ? false : true}
                className='small'>
                    Edit review
                </button>
            </div>
                )} 
          </div>
                ))}
        </div>
        )}
        </>
    )
}

export default OneBusiness