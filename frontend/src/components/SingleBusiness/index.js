import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

import {SingleBusinesses} from '../../store/business'
import {getBusinesses} from '../../store/business'

// import {User} from '../../../../backend/db/models';

import './single.css';

function OneBusiness(){
    const dispatch = useDispatch()
    const {businessId} = useParams()

    const sessionUser = useSelector((state) => state.session.user);

    const businesses = useSelector(state => Object.values(state.businesses));
    // console.log("********", businesses);


    const business = businesses.find(business => business.id === Number(businessId))
    // console.log('>>>>',business)

    // const answers = businesses.map(business=> )
    
    useEffect(() => {
        dispatch(SingleBusinesses(businessId))
        dispatch(getBusinesses())
      },[dispatch, businessId])

      console.log(business)
      console.table(business)
    return(
        <>
        {!!business &&(
        <div>

         <ul className='title'>{business.title}</ul>
            <ul className='type'>{business.description}</ul>
            <li>Address :{business.address} {business.city},{business.state}.{business.zipCode}</li>
            <img className='busimage' src={`/images/${business.title}.jpeg`}></img>
            <div aria-hidden={business.Reviews ? true : false}>No reviews available</div>
            {!!business.Reviews && business.Reviews.map(review => (
                <div>
                <div  className='reviews' key={business.id}>Reviews</div>
                    <ul>{review.userId} :{review.answer} -- {review.rating} ⭐️</ul>        
                </div>
                ))}
        </div>
        )}
        </>
    )
}

export default OneBusiness