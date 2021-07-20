import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getBusinesses } from '../../store/business';
// import { getOneBusinesses } from '../../store/business';


import './Home.css';

function HomePage(){
    const dispatch = useDispatch()


    const businesses = useSelector(state => Object.values(state.businesses));
    
    useEffect(() => {
        dispatch(getBusinesses())
      },[dispatch])

    return(
        <>
        <div className="grid-container">
        {!!businesses && businesses.map((business)=>(
            <div key={business.id} to={`api/home/${business.id}`} className={`${business.title}`}>
                <NavLink to={`/${business.id}`}>{business.title}</NavLink>
                <li>{business.description}</li>
                <img className='image' src={`/images/${business.title}.jpeg`} alt=''></img>
                <li>{business.address}</li>
                <li>{business.city},{business.state}.{business.zipCode}</li>
            </div>
        ))}
        </div>
        </>
    )
        }

    export default HomePage