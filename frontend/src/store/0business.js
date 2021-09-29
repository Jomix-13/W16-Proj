import {csrfFetch} from './csrf'

// import {DeleteReview} from './reviews'

const GET_BUSINESSES= 'buiness/GET_BUSINESSES'
const ONE_BUSINESS= 'business/ONE_BUSINESS'
const ADD_BUSINESS ='add business'
const DELETE_BUSINESS = 'delete business'
const EDIT_BUSINESS = 'edit business'

//action creator
const pullBusinesses = list => ({
    type: GET_BUSINESSES,
    list,
  });
  
const oneBusiness = business => ({
    type: ONE_BUSINESS,
    business,
  });

const add = (business) =>({
  type: ADD_BUSINESS,
  business,
})
const remove = (business) =>({
  type: DELETE_BUSINESS,
  business,
})
const edit = (business) =>({
  type: EDIT_BUSINESS,
  business,
})

//Thunk
export const getBusinesses = () => async dispatch => {
  
    const response = await fetch(`/api/businesso`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(pullBusinesses(list));
    }
  };

export const SingleBusinesses = (businessId) => async dispatch => {
  const response = await fetch(`/api/businesso/${businessId}`);
  
  if (response.ok) {
    const business = await response.json();
    dispatch(oneBusiness(business));
    console.log('THUNK, from Back to Front',business)
    
      return business
    }
};

export const addBusiness =({ownerId,title,description,image,address,city,state,zipCode}) => async (dispatch) =>{
  const response = await csrfFetch(`/api/businesso/new`,
  {method:'POST',
  headers:{'Content-Type' : 'application/json'},
  body: JSON.stringify({ownerId,title,description,image,address,city,state,zipCode})
  });
  
  if (response.ok) {
    const business = await response.json();
    dispatch(add(business));
    return business
  }
}

export const DeleteBusiness = (business) => async dispatch => {
  const response = await csrfFetch(`/api/businesso/${business.id}`,{
    method:'DELETE',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify(business)
  });
  if (response.ok) {
    await response.json();
    
    dispatch(remove(business));

    return business
  }
};

export const EditBusiness = (business) => async (dispatch) =>{

  const response = await csrfFetch(`/api/businesso/update/${business.id}`,
  {method:'PUT',
  headers:{'Content-Type' : 'application/json'},
  body: JSON.stringify(business)
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(edit(data));
    return data
  }
}

const intialState = {
    allBusinessess:[], // All Buinesses
    oneBusiness:{}, // One Buiness
  }

  //Reducer
  const BusinessoReducer = (state = intialState, action) => {
    
    switch (action.type) {
      case GET_BUSINESSES: {
        return {
          ...state,
          allBusinessess:action.list,
        };
      }
      case ONE_BUSINESS:{
        return{
          ...state,
          oneBusiness:action.business,
        };
      };
      case ADD_BUSINESS: {
        return {
        ...state,
        allBusinessess : [...state.allBusinessess, action.business],
        };
      }
      case DELETE_BUSINESS: {
        return {...state}
      }
      case EDIT_BUSINESS:{
        return {
          ...state,
          oneBusiness : action.business.business
        };
      }
      default:
        return state;
    }
  }

export default BusinessoReducer

