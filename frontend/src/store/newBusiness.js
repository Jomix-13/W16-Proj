import {csrfFetch} from './csrf'


const ADD_BUINESS ='add business'
const DELETE_BUINESS ='add business'
const EDIT_BUINESS = 'edit business'


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
      return business
    }
};

export const EditBusiness = ({business}) => async (dispatch) =>{
  
    console.log('>>>>>>>>>>>>>>>>>>',business)
  
    const response = await csrfFetch(`/api/fearure/${business.id}`,
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

const newBusinessReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_BUINESS: {
            const newState = { ...state };
            return newState;
        }
        case DELETE_BUINESS: {
            const newState = { ...state };
            const business = newState[action.buiness];
            delete newState[business];

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


export default newBusinessReducer

