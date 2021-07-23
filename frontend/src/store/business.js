import {csrfFetch} from './csrf'

// import {DeleteReview} from './reviews'

const GET_BUSINESSES= 'buiness/GET_BUSINESSES'
const ONE_BUSINESS= 'business/ONE_BUSINESS'
const ADD_REVIEW = 'add review'
const DELETE_REVIEW = 'delete review'
const EDIT_REVIEW = 'edit review'
const ADD_BUINESS ='add business'
const DELETE_BUINESS = 'delete business'
const EDIT_BUINESS = 'edit business'

//action creator
const pullBusinesses = list => ({
    type: GET_BUSINESSES,
    list,
  });
  
const oneBusiness = business => ({
    type: ONE_BUSINESS,
    business,
  });

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
const add = (business) =>({
  type: ADD_BUINESS,
  business,
})
const remove = (business) =>({
  type: DELETE_BUINESS,
  business,
})
const edit = (business) =>({
  type: EDIT_BUINESS,
  business,
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
    dispatch(addRevieww(review));
    return review
  }
}
export const DeleteReview = (review) => async dispatch => {
  // console.log('>>>>>>>>>>>>>>>>>>|||||',review)

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
  
  console.log('>>>>>>>>>>>>>>>>>>',review)

  const response = await csrfFetch(`/api/business/${review.id}`,
  {method:'PUT',
  headers:{'Content-Type' : 'application/json'},
  body: JSON.stringify(review)
  });
  
  if (response.ok) {
    await response.json();
    dispatch(editReview(review));
    return review
  }
}

export const addBusiness =({ownerId,title,description,address,city,state,zipCode}) => async (dispatch) =>{
  const response = await csrfFetch(`/api/feature/new`,
  {method:'POST',
  headers:{'Content-Type' : 'application/json'},
  body: JSON.stringify({ownerId,title,description,address,city,state,zipCode})
  });
  
  if (response.ok) {
    const business = await response.json();
    dispatch(add(business));
    console.log(business)
    return business
  }
}

export const DeleteBusiness = (business) => async dispatch => {
  console.log('>>>>>>>>>>>>>>>>>>|||||',business)

  const response = await csrfFetch(`/api/feature/${business.id}`,{
    method:'DELETE',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify(business)
  });
  if (response.ok) {
    await response.json();
    
    dispatch(remove(business));
    console.log('>>>>>>>>>>>>>>>>>>%%%%%%',business)

    return business
  }
};

export const EditBusiness = ({business}) => async (dispatch) =>{

  console.log('>>>>>>>>>>>>>>>>>>',business)

  const response = await csrfFetch(`/api/feature/${business.id}`,
  {method:'PUT',
  headers:{'Content-Type' : 'application/json'},
  body: JSON.stringify(business)
  });
  
  if (response.ok) {
    await response.json();
    dispatch(edit(business));
    return business
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
      newState[action.review.businessId] = { ...state[action.review.businessId], Reviews: state[action.review.businessId].Reviews.filter(({ id }) => id !== action.review.id) };
      newState[action.review.businessId].Reviews.push(action.review);
        return newState;
      }
      case EDIT_REVIEW:{

        const newState = { ...state };
        newState[action.review.id] = action.review;
        console.log('>>>>>>>>>>1',[action.review])
        return newState;

        // const newState = { ...state };
        // console.log('>>>>>>>>>>',newState)
      //  newState[action.review.id] = action.review;;
        // oneReview = oneReview
        // const reviews = business.Reviews
        // console.log('>>>>>>>>>>2',reviews)
        // const oneReview = reviews.find(review=> review.id)
        // console.log('>>>>>>>>>>3',oneReview)
        // return newState
      }
      case DELETE_REVIEW: {
        const newState = { ...state };
        const business = newState[action.review.businessId];
        const reviews = business.Reviews
        let restReview = reviews.filter(review=> review.id !== action.review.id)
        business.Reviews = restReview
        // delete newState[review];
        // console.log(action.review)
        return newState;
      }
      case ADD_BUINESS: {
        const newState = { ...state };
        newState[action.business.id] = action.business;
        return newState;
    }
    case DELETE_BUINESS: {

        const newState = { ...state };
        // const business = newState[action.buiness];
        delete newState[action.business.id];

        return newState;
    }
    case EDIT_BUINESS:{
        const newState = { ...state };
        const business = newState[action.buiness];
        console.log('LLLLLL',business)

        return newState
      }
      default:
        return state;
    }
  }

  export default BusinessReducer

