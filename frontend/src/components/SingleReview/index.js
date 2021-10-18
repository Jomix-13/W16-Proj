import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
// import {DeleteReview,SingleBusinesses} from '../../store/business'
// import {DeleteReview} from '../../store/0review'
import {getReviews,DeleteReview} from '../../store/0review'

// import EditReviewForm from '../SingleBusiness/EditReviewForm'
import EditReviewFormModal from '../EditCommentModal'
import { useHistory } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

function SingelReview({review}){

    const history = useHistory()
    const dispatch = useDispatch()
    const [showEditReviewForm,setShowEditReviewForm] = useState(false)
    const [editClicked, setEditClicked] = useState(false);
    const [targetId, setTargetId] = useState("");

    const sessionUser = useSelector((state) => state.session.user);
    const reviews = useSelector(state => state.review.allReviews);

    const business = useSelector(state => state.business.oneBusiness);


    function rating(rev){
        if(rev === 1) return '⭐️'
        if(rev === 2) return '⭐️⭐️'
        if(rev === 3) return '⭐️⭐️⭐️'
        if(rev === 4) return '⭐️⭐️⭐️⭐️'
        if(rev === 5) return '⭐️⭐️⭐️⭐️⭐️'
    }

    
    return(
        <div classname='AllRevs'>
            <div className='revTitle'>Reviews</div>
        <div>
        {reviews?.map((rev)=>{
            return(
            // <div className='review'>{rev.answer}</div>
            // )
          rev?.businessId === business?.id ? 
          <div className='review'>
            <div className='user'>
                {/* <div className='starz'> */}
                {rev?.User?.username}
                {/* </div> */}
            </div>
            <div className='rev'>{rev?.answer}</div>
            <div className='stars'>
                <div className='starz'>
                    {rating(rev.rating)}</div>
                </div>
            {rev?.userId === sessionUser?.id ?
            <div className='form'>
            <div className='btns'>
            <button
                id='buts2'
                type='button'
                value='Redirect Me'
                onClick={() => 
                {
                    dispatch(DeleteReview(rev))
                }
            }>
                Delete
            </button>
            <EditReviewFormModal id={rev.id}/>

            {/* <button
                id='buts2'
                onClick={() => {
                    setShowEditReviewForm(true)
                    setEditClicked(!editClicked);
                    setTargetId(rev.id)
                }}
            >
                Edit
            </button> */}
            </div>
            {/* <div className='editForm'>
                {showEditReviewForm && editClicked && rev.id === targetId ?
                <EditReviewForm revieww={rev} hideForm={setShowEditReviewForm}/>
                : null
            }
            </div> */}
          </div>
            : null
            }
          </div>
          : null
          //   <div classname='review'>
          //   No reviews available
          //   </div>
          )
        })}
        </div>
        {/* <div>
        {showEditReviewForm && 
                <EditReviewForm revieww={rev} hideForm={setShowEditReviewForm}></EditReviewForm>
                }
        </div> */}


        
        {/* <div key={review.id}>
            <ul className='SingleReview'> 
            {review?.User?.username} :{review.answer} -- {review.rating} ⭐️</ul>
            {sessionUser && sessionUser.id === review.userId && (    
                <div className='container'>
                <button 
                // type='Submit'
                type='button'
                value='Redirect Me'
                onClick={() => 
                    {
                    dispatch(DeleteReview(review))
                    }
                }
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
        </div> */}
        </div>
    )
}
export default SingelReview