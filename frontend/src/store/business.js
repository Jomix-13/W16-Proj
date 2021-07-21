

const GET_BUSINESSES= 'buiness/GET_BUSINESSES'
const ONE_BUSINESS= 'business/ONE_BUSINESS'


//action creator
const pullBusinesses = list => ({
    type: GET_BUSINESSES,
    list,
  });
  
const oneBusiness = business => ({
    type: ONE_BUSINESS,
    business,
  });

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

      default:
        return state;
    }
  }

  export default BusinessReducer

