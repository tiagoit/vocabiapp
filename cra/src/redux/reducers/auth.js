/* eslint-disable object-curly-newline */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from '../actions';

export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isSigningUp: false,
    isVerifying: false,
    loginError: '',
    signupError: '',
    logoutError: '',
    isAuthenticated: false,
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, loginError: '' };
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, isLoggingIn: false, isAuthenticated: false, loginError: action.message };
    case SIGNUP_REQUEST:
      return { ...state, isSigningUp: true, signupError: '', loginError: '' };
    case SIGNUP_SUCCESS:
      return { ...state, isSigningUp: false, isAuthenticated: true };
    case SIGNUP_FAILURE:
      return { ...state, isSigningUp: false, isAuthenticated: false, signupError: action.message };
    case LOGOUT_REQUEST:
      return { ...state, isLoggingOut: true, logoutError: '' };
    case LOGOUT_SUCCESS:
      return { ...state, isLoggingOut: false, isAuthenticated: false };
    case LOGOUT_FAILURE:
      return { ...state, isLoggingOut: false, logoutError: action.message };
    case VERIFY_REQUEST:
      return { ...state, isVerifying: true, verifyingError: '' };
    case VERIFY_SUCCESS:
      return { ...state, isVerifying: false };
    default:
      return state;
  }
};
