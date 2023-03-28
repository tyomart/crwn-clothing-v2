import { USER_ACTIONS_TYPE } from "./user.types";

 export const USER_INTITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    errorState: null,
}

export const userReducer = (state = USER_INTITIAL_STATE, action) => {

    const { type, payload } = action;
    switch(type) {

        case USER_ACTIONS_TYPE.SIGN_IN_SUCCESS:
            return{
                ...state, currentUser: payload
            }
        case USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS: 
            return { ...state, currentUser: null }
        case USER_ACTIONS_TYPE.SIGN_OUT_FAILED:

        case USER_ACTIONS_TYPE.SIGN_IN_FAILED:

        case USER_ACTIONS_TYPE.SIGN_UP_FAILED:
            return{...state, error: payload}
        default:
            return state;
    }   
}

