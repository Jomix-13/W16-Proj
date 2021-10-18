import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getBusinesses } from '../../store/0business';



import './Home.css';

function HomePage(){
    const dispatch = useDispatch()
    
    
    const businesses = useSelector(state => state.business.allBusinessess)

    
    useEffect(() => {
        dispatch(getBusinesses())
      },[dispatch],businesses)
    return(
        <>
        <div className="grid-container">
        {!!businesses && businesses.map((business)=>(
        <NavLink  to={`/${business.id}`} >    
            <div 
            key={business.id} className='busdiv'  >
                <img className='image' src={business.image} alt=''></img>
                <div className='divpart'>
                <div className='busname'>{business.title}</div>
                <div className='busdes'>{business.description}</div>
                <div className='busadd'>{business.address}, {business.city}</div>
                </div>
            </div>
        </NavLink>
        ))}
        </div>

        </>
    )
        }

    export default HomePage