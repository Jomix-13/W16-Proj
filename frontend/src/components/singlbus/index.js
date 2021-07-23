import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import * as NewBusiness from '../../store/newBusiness'
import EditReviewForm from '../SingleBusiness/EditReviewForm'
import { Redirect, useParams } from 'react-router'

function Singelbus({review}){

    const dispatch = useDispatch()
    const {businessId} = useParams()

    const sessionUser = useSelector((state) => state.session.user);

    const businesses = useSelector(state => Object.values(state.businesses));  
    const business = businesses.find(business => business.id === Number(businessId))

    return(
        <>
            {sessionUser && sessionUser.id === business.ownerId && (    
                <div className='container'>
                    <button 
                    type='button'
                    onClick={
                        () => dispatch(NewBusiness.DeleteBusiness(business))
                        // ,window.location.href='/'
                    }
                    className='small'>
                    Delete Business
                    </button>

                    <button 
                    onClick={() => window.location.href=`/update/${businessId}`}
                    className='small'>
                    Edit review
                    </button>
                </div>
            )}
        </> 
    )
}
export default Singelbus