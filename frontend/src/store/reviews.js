import {csrfFetch} from './csrf'



const ADD_REVIEW = 'add review'
const DELETE_REVIEW = 'delete review'
//action creator
const add = (review) =>({
    type: ADD_REVIEW,
    review,
})
const remove = (reviewId) =>({
    type: DELETE_REVIEW,
    reviewId,
})
//thunk
export const addReview =({review,rating,businessId,userId}) => async (dispatch) =>{
    // const businessId = useParams()
    // const response = await csrfFetch(`/api/${businessId}`,
    // console.log(review,rating,businessId,userId)
    const response = await csrfFetch(`/api/business`,
    {method:'POST',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify({review,rating,businessId,userId})
    });
    
    if (response.ok) {
      const review = await response.json();
      dispatch(add(review));
      return review
    }
}
export const DeleteReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/business/${review.id}`,{
      method:'DELETE',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify(review)
    });
    if (response.ok) {
      const review = await response.json();
      dispatch(remove(review));
      return
    }
};

const ReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_REVIEW: {
            return { 
            ...state,
            arr: [...state.arr, action.review]
            }
        }
        case DELETE_REVIEW: {
            const newState = { ...state };
            delete newState[action.reviewId];
            return newState;
        }
      default:
        return state;
    }
}

export default ReviewReducer
  
