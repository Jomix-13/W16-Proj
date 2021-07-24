import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import * as NewBusiness from '../../store/business'
import EditReviewForm from '../SingleBusiness/EditReviewForm'
import { Redirect, useHistory, useParams } from 'react-router'

function Singelbus(){

    const dispatch = useDispatch()
    const {businessId} = useParams()
    const history = useHistory()

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
                        () => {dispatch(NewBusiness.DeleteBusiness(business))
                        history.push('/')
                        }
                    }
                    className='small'>
                    Delete Business
                    </button>

                    <button 
                    onClick={() => window.location.href=`/update/${businessId}`}
                    className='small'>
                    update Business
                    </button>
                </div>
            )}
        </> 
    )
}
export default Singelbus