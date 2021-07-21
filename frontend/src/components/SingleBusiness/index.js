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

    const [review,setReview] = useState('')
    const [rating,setRating] = useState('')
    const [errors,setErrors] = useState('')


    
    useEffect(() => {
        const errorHandler=[]
        if(!review || review.length < 10) errorHandler.push('Please enter your review')
        if(rating < 0 || rating > 5 || !rating ) errorHandler.push('Rating value must be NUMBER between 1-5')
        //   || typeof(rating) !== 'number'
        setErrors(errorHandler)
      },[review, rating])

    useEffect(() => {
        dispatch(SingleBusinesses(businessId))
        dispatch(getBusinesses())
      },[dispatch, businessId])

      function formHandel(e){
        e.preventDefault()
        return dispatch(reviewActions.addReview({ review, rating }))
      }

    return(
        <>
        {!!business &&(
        <div>

         <ul className='title'>{business.title}</ul>
            <ul className='type'>{business.description}</ul>
            <li>Address :{business.address} {business.city},{business.state}.{business.zipCode}</li>
            <img className='busimage' src={`/images/${business.title}.jpeg`}></img>
            <div hidden={business.Reviews ? true : false}>No reviews available</div>
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
                                                      type="text"
                                                      value={rating}
                                                      onChange={(e) => setRating(e.target.value)}
                                                    />
                                                  </label>
                                                  <button
                                                    // disabled={errors.length ? true : false}
                                                    type="submit"
                                                  >
                                                      Add Review</button>
                                                    
                                                    </form>
            {!!business.Reviews && business.Reviews.map(review => (
                <div>
                <div  className='reviews' key={review.id}>Reviews</div>
                    <ul>{review.userId} :{review.answer} -- {review.rating} ⭐️</ul>        
                </div>
                ))}
        </div>
        )}
        </>
    )
}

export default OneBusiness