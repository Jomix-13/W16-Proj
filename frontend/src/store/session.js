import {csrfFetch} from './csrf'



const LOGIN = 'session/login'
const LOGOUT = 'session/logout'
// const SIGNUP = 'session/signup'

//action creator
const login = (user) =>({
    type: LOGIN,
    user,
})
const logout = () =>({
    type: LOGOUT,
})
// const signup = () =>({
//     type: SIGNUP,
// })

//thunk
export const restoreUser =(user) => async (dispatch) =>{
    const res = await csrfFetch('/api/session')
    const userData = await res.json() ///
    dispatch(login(userData.user)) ///
    return res
}

export const loginUser =(user) => async (dispatch) =>{
    const { credential, password } = user
    const res = await csrfFetch('/api/session',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({credential, password})
    })
    const userData = await res.json() ///
    dispatch(login(userData.user)) ///
    return res
}

export const signupUser =(user) => async (dispatch) =>{
    const { username, email, password } = user
    const res = await csrfFetch('/api/users',{
        method: 'POST',
        body: JSON.stringify({username, email, password})
    })
    const userData = await res.json() ///
    dispatch(login(userData.user)) ///
    return res
}

export const logoutUser =(user) => async (dispatch) =>{
    const res = await csrfFetch('/api/session',{
        method: 'DELETE',
    })
    dispatch(logout()) ///
    return res
}

const userSession = (state={user:null},action)=>{
    let newState
    switch(action.type){
        case LOGIN:
            newState = Object.assign({}, state);
            newState.user = action.user;
            return newState;
        case LOGOUT:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState           
        default:
            return state
    }
}

export default userSession