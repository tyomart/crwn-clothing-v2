import { USER_ACTIONS_TYPE } from "./user.types";
import { createAction } from "../../../utils/reducer.utils"

export const setCurrentUser = (user) => 
    createAction(USER_ACTIONS_TYPE.SET_CURRENT_USER, user)


    /*
 CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
    GOOCLE_SIGN_IN_START: 'user/GOOCLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS'
    SIGN_IN_FAILURE: 'user/SIGN_IN_FAILURE'
    */

    export const checkUserSession = () => 
      createAction(USER_ACTIONS_TYPE.CHECK_USER_SESSION)

    export const googleSignInStart = () => 
      createAction(USER_ACTIONS_TYPE.GOOCLE_SIGN_IN_START)

    export const emailSignInStart = (email, password) => 
      createAction(USER_ACTIONS_TYPE.EMAIL_SIGN_IN_START, {email, password})

    export const signInSuccess = (user) => 
      createAction(USER_ACTIONS_TYPE.SIGN_IN_SUCCESS, user)
    
    export const signInFailed = (error) => 
      createAction(USER_ACTIONS_TYPE.SIGN_IN_FAILED, error)

    export const signUpStart = (email, password, displayName) => 
      createAction(USER_ACTIONS_TYPE.SIGN_UP_START, {email, password, displayName})

    export const signUpSuccess = (user, additionalDetails) => 
      createAction (USER_ACTIONS_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails })

    export const signUpFailed = (error) => 
      createAction(USER_ACTIONS_TYPE.SIGN_UP_FAILED, error)

    export const signOutStart = () => 
      createAction(USER_ACTIONS_TYPE.SIGN_OUT_START)

    export const signOutSuccess = () => 
      createAction (USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS)

    export const signOutFailed = (error) => 
      createAction(USER_ACTIONS_TYPE.SIGN_OUT_FAILED, error)

