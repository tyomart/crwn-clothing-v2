import { USER_ACTIONS_TYPE } from "./user.types";
 export const USER_INTITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = USER_INTITIAL_STATE, action) => {

    console.log('dispatched');
    console.log(action);

    const { type, payload } = action;
    switch(type) {

        case USER_ACTIONS_TYPE.SET_CURRENT_USER:
            return{
                ...state,
                 currentUser: payload
            }
        default:
            return state;
    }   
}

