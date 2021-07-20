

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

export const SingleBusinesses = (id) => async dispatch => {
  
    const response = await fetch(`/api/${id}`);
    console.log(response)
  
    if (response.ok) {
      const business = await response.json();
      dispatch(oneBusiness(business));
      return business
    }
};

  //Reducer
  const BusinessReducer = (state = {}, action) => {
    console.log(action.type)
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
        console.log("ONe business inside reducer")
        let newState={...state}
        // const business = newState.list.map(id => newState[id])
        // business.push(action.business);
        newState[action.business.id] = action.business
        return newState;
      };

      default:
        return state;
    }
  }

  export default BusinessReducer

