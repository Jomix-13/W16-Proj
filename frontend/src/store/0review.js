import {csrfFetch} from './csrf'

// import {DeleteReview} from './reviews'

//get all reviews
const GET_ALLREVIEWS = 'get all reviews'
//get one review
const GET_REVIEW = 'get review'

const ADD_REVIEW = 'add review'
const DELETE_REVIEW = 'delete review'
const EDIT_REVIEW = 'edit review'


//action creator

const getAllReviews = (list) =>({
    type: GET_ALLREVIEWS,
    list,
})
const getOneReview = (review) =>({
    type: GET_REVIEW,
    review,
})
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
export const getReviews = () => async dispatch => {
  
  const response = await fetch(`/api/review`);

  if (response.ok) {
    const list = await response.json();
    dispatch(getAllReviews(list));
  }
};

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
  

  const response = await csrfFetch(`/api/review/${review.id}`,
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
      case GET_ALLREVIEWS: {
        return {
          ...state,
          allReviews:action.list
        }        
      }
      case GET_REVIEW:{
        return{
          ...state,
          oneReview:action.review,
        };
      };
      case ADD_REVIEW: {
        return {
          ...state,
          // oneBusiness:{
          //   Reviews: [...state.oneBusiness.Reviews,action.review]
        // }
        allReviews :[action.review,...state.allReviews]
        }        
      }
      case EDIT_REVIEW:{
        const newState = { ...state };
            newState.allReviews.forEach((review) => {
                if (review.id === action.review.review.id) {
                    review.answer = action.review.review.answer;      
                    review.rating = action.review.review.rating;      
                }
            });
            return newState;
      }
      case DELETE_REVIEW: {
        // let allreviewsArr = state.oneBusiness.Reviews
        let filteredReviews = state.allReviews.filter(review=> review.id !== action.review.id)
        return {
          ...state,
          allReviews :[...filteredReviews]
          }
      }
      default:
        return state;
    }
  }

export default ReviewReducer

