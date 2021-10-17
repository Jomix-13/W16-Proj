import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

// import { getBusinesses } from '../../store/business';
import { getBusinesses } from '../../store/0business';

// import { getOneBusinesses } from '../../store/business';


import './Home.css';

function HomePage(){
    const dispatch = useDispatch()
    
    
    // const businesses = useSelector(state => state.businesses.allBusinessess)
    const businesses = useSelector(state => state.business.allBusinessess)
    const reviews = useSelector(state => state.review.allReviews); 

    
    useEffect(() => {
        dispatch(getBusinesses())
      },[dispatch],businesses)
    return(
        <>
        <div className="grid-container">
        {!!businesses && businesses.map((business)=>(
        <NavLink  to={`/${business.id}`} >    
            <div 
            style={{ backgroundimage: `{business.image}`}}
            key={business.id} className='busdiv'  >
                <img className='image' src={business.image} alt=''></img>
                <div className='divpart'>
                <div className='busname'>{business.title}</div>
                <div className='busdes'>{business.description}</div>
                <div className='busadd'>{business.address}, {business.city}</div>
                </div>
                {/* <li className='busadd2'>{business.city},{business.state}.{business.zipCode}</li> */}
            </div>
        </NavLink>
        ))}
        </div>

        </>
    )
        }

    export default HomePage