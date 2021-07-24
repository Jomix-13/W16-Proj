import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import {DeleteReview} from '../../store/business'
import EditReviewForm from '../SingleBusiness/EditReviewForm'

function SingelReview({review}){

    const dispatch = useDispatch()
    const [showEditReviewForm,setShowEditReviewForm] = useState(false)
    const sessionUser = useSelector((state) => state.session.user);



    return(
        <div key={review.id}>
            <ul> {review?.User?.username} :{review.answer} -- {review.rating} ⭐️</ul>
            {sessionUser && sessionUser.id === review.userId && (    
                <div className='container'>
                <button 
                // type='Submit'
                type='button'
                onClick={() => dispatch(DeleteReview(review))}
                // onSubmit={DeleteHandeler}
                className='small'>
                Delete review
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