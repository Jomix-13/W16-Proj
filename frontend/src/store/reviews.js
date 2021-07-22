import {csrfFetch} from './csrf'

const ADD_REVIEW = 'add review'
const DELETE_REVIEW = 'delete review'
const GET_USERS= 'buiness/GET_BUSINESSES'


//action creator
const pullUsers = list => ({
    type: GET_USERS,
    list,
  });
const add = (review) =>({
    type: ADD_REVIEW,
    review,
})
const remove = (review) =>({
    type: DELETE_REVIEW,
    review,
})
//thunk
export const addReview =({review,rating,businessId,userId}) => async (dispatch) =>{
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
export const EditReview =({review,rating}) => async (dispatch) =>{
    const response = await csrfFetch(`/api/business/${review.id}`,
    {method:'PUT',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify(review)
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
      return review
    }
};

export const getUsers = () => async dispatch => {
  
  const response = await fetch(`/api/users`);

  if (response.ok) {
    const list = await response.json();
    dispatch(pullUsers(list));
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
          delete newState[action.review];
          console.log(newState)
            return newState;
        }
        case GET_USERS: {
          const allUsers = {};
          action.list.forEach(user => {
            allUsers[user.id] = user;
          });
          return {
            ...allUsers,
            ...state,
          };
        }
      default:
        return state;
    }
}

export default ReviewReducer
  
