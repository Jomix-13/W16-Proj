import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

import {SingleBusinesses} from '../../store/business'
import {getBusinesses} from '../../store/business'

// import {Review} from '../../../../backend/db/models';

import './single.css';

function OneBusiness(){
    const dispatch = useDispatch()
    const {businessId} = useParams()

    

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

         <ul>{business.title}</ul>
            <li>{business.description}</li>
            <li>{business.address}</li>
            <li>{business.city},{business.state}.{business.zipCode}</li>
            <img className='image' src={`/images/${business.title}.jpeg`}></img>
            {!!business.reviews && business.review.map(business => (
                <div>
                    <ul>{business.reviews.answer}</ul>       
                    <li>{business.reviews.rating} ⭐️</li>   
                </div>
                ))}
        </div>
        )}
        </>
    )
}

export default OneBusiness