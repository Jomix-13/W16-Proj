import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import {DeleteReview,SingleBusinesses} from '../../store/business'
import EditReviewForm from '../SingleBusiness/EditReviewForm'
import { useHistory } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

function SingelReview({review}){

    const history = useHistory()
    const dispatch = useDispatch()
    const [showEditReviewForm,setShowEditReviewForm] = useState(false)
    const sessionUser = useSelector((state) => state.session.user);
    const business = useSelector(state => state.businesses.oneBusiness);  

    function Redirect(){
        window.location = `/business/${business.id}`
    }


    return(
        <div key={review.id}>
            <ul className='SingleReview'> {review?.User?.username} :{review.answer} -- {review.rating} ⭐️</ul>
            {sessionUser && sessionUser.id === review.userId && (    
                <div className='container'>
                <button 
                // type='Submit'
                type='button'
                value='Redirect Me'
                onClick={() => 
                    {
                    dispatch(DeleteReview(review))
                    history.push(`/`)

                    }
                }
                className='small'>
                    {/* <NavLink to={`{/${business.id}`}> */}
                        Delete review
                    {/* </NavLink> */}
                </button>

                <button 
                onClick={() => setShowEditReviewForm(true)}
                className='small'>
                Edit review
                </button>
                {showEditReviewForm && 
                <EditReviewForm revieww={review} hideForm={setShowEditReviewForm}></EditReviewForm>
                }

                </div>
            )} 
        </div>
    )
}
export default SingelReview