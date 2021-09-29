import {csrfFetch} from './csrf'

// import {DeleteReview} from './reviews'

//get all reviews
//get one review
const ADD_REVIEW = 'add review'
const DELETE_REVIEW = 'delete review'
const EDIT_REVIEW = 'edit review'


//action creator

const addRevieww = (review) =>({
    type: ADD_REVIEW,
    review,
})

const removeReview = (review) =>({
    type: DELETE_REVIEW,
    review,
})
const editReview = (review) =>({
    type: EDIT_REVIEW,
    review,
})


//Thunk

export const addReview =({review,rating,businessId,userId}) => async (dispatch) =>{
  const response = await csrfFetch(`/api/business`,
  {method:'POST',
  headers:{'Content-Type' : 'application/json'},
  body: JSON.stringify({review,rating,businessId,userId})
  });
  
  if (response.ok) {
    const review = await response.json();
    dispatch(addRevieww(review));
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
    await response.json();
    dispatch(removeReview(review));
    return review
  }
};

export const EditReview = (review) => async (dispatch) =>{
  

  const response = await csrfFetch(`/api/business/${review.id}`,
  {method:'PUT',
  headers:{'Content-Type' : 'application/json'},
  body: JSON.stringify(review)
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(editReview(data));
    return review
  }
}


const intialState = {
    allReviews:[], // All Buinesses
    oneReview:{}, // One Buiness
  }

  //Reducer
  const ReviewReducer = (state = intialState, action) => {
    
    switch (action.type) {
      case ADD_REVIEW: {
        return {
          ...state,
          oneBusiness:{
            Reviews: [...state.oneBusiness.Reviews,action.review]
          }
        }        
      }
      case EDIT_REVIEW:{
        let allreviewsArr = state.oneBusiness.Reviews
        let filteredReviews = allreviewsArr.filter(review=> review.id !== action.review.review.id)
        return {
          ...state,
          oneBusiness:{
            Reviews: [action.review.review,...filteredReviews]
          }
        }
      }
      case DELETE_REVIEW: {
        let allreviewsArr = state.oneBusiness.Reviews
        let filteredReviews = allreviewsArr.filter(review=> review.id !== action.review.id)
        return {
          ...state,
          oneBusiness: {
            Reviews:[...filteredReviews]
          }
        };
      }
      default:
        return state;
    }
  }

export default ReviewReducer

