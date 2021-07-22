import {csrfFetch} from './csrf'

// import {DeleteReview} from './reviews'

const GET_BUSINESSES= 'buiness/GET_BUSINESSES'
const ONE_BUSINESS= 'business/ONE_BUSINESS'
const ADD_REVIEW = 'add review'
const DELETE_REVIEW = 'delete review'

//action creator
const pullBusinesses = list => ({
    type: GET_BUSINESSES,
    list,
  });
  
const oneBusiness = business => ({
    type: ONE_BUSINESS,
    business,
  });

  const add = (review) =>({
    type: ADD_REVIEW,
    review,
})

const remove = (review) =>({
    type: DELETE_REVIEW,
    review,
})

//Thunk
export const getBusinesses = () => async dispatch => {
  
    const response = await fetch(`/api/businesses`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(pullBusinesses(list));
    }
  };

export const SingleBusinesses = (businessId) => async dispatch => {
    const response = await fetch(`/api/business/${businessId}`);
  
    if (response.ok) {
      const business = await response.json();
      console.log('<><><<><',business)
      dispatch(oneBusiness(business));
      return business
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
    dispatch(add(review));
    return review
  }
}
export const DeleteReview = (review) => async dispatch => {
  // console.log('>>>>>>>>>>>>>>>>>>',review)
    const response = await csrfFetch(`/api/business/${review.id}`,{
      method:'DELETE',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify(review)
    });
    if (response.ok) {
      await response.json();
      dispatch(remove(review));
      return review
    }
};

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
  //Reducer
  const BusinessReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_BUSINESSES: {
        const allBusinesses = {};
        action.list.forEach(business => {
            allBusinesses[business.id] = business;
        });
        return {
          ...allBusinesses,
          ...state,
        };
      }
      case ONE_BUSINESS:{
        let newState={...state}
        newState[action.business.id] = action.business
        return newState;
      };
      case ADD_REVIEW: {
        const newState = { ...state };
        const business = newState[action.review.businessId];
        const reviews = business.Reviews
        let restReview = reviews.push(action.review)
        // delete newState[review];
        console.log(newState)
        // console.log(action.review)
        return newState;
      }
      case DELETE_REVIEW: {
        const newState = { ...state };
        const business = newState[action.review.businessId];
        const reviews = business.Reviews
        let restReview = reviews.filter(review=> review.id !== action.review.id)
        business.Reviews = restReview
        // delete newState[review];
        // console.log(newState)
        // console.log(action.review)
        return newState;
      }
      default:
        return state;
    }
  }

  export default BusinessReducer

