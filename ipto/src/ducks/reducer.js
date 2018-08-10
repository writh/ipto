const initialState = {
    username: null,
    password: null,
   
}
const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const GET_INFO = 'GET_INFO'
const LOGOUT = "LOGOUT"

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
        return Object.assign({}, state, {username: action.payload.username, password: action.payload.password})

        case REGISTER:
        return Object.assign({}, state, {username: action.payload.username, password: action.payload.password})
        
        case GET_INFO:
        return Object.assign({}, state, {username: action.payload.username})

        case LOGOUT:
        return Object.assign({}, state, {username: action.payload.username, password: action.payload.password})
        default: return state
    }
}

export function loginUser(user){
    return{
        type:LOGIN,
        payload: user
    }
}
export function registerUser(user){
    return{
        type: REGISTER,
        payload: user
    }
}
export function getUser(user){
    return{
        type: GET_INFO,
        payload: user
    }
}
export function logOut(){
    return{
        type: LOGOUT,
        payload: initialState
    }
}