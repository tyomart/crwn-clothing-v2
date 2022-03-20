import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const googleSignInStart = () => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILED,
  payload: error,
});

export const emailSignInStart = (email, password) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const checkUserSession = () => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
});

export const signOutFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
  payload: error,
});

export const signUpStart = (email, password, displayName) => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_UP_FAILED,
  payload: error,
});
