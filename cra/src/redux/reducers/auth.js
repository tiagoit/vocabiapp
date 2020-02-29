/* eslint-disable object-curly-newline */

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET_PASS_REQUEST,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from '../actions';

export default (
  state = {
    isSigningUp: false,
    isLoggingIn: false,
    isResettingPass: false,
    isLoggingOut: false,
    isVerifying: false,
    signupError: '',
    loginError: '',
    resetPassError: '',
    logoutError: '',
    resetPassSuccess: false,
    isAuthenticated: false,
  },
  action,
) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, isSigningUp: true, signupError: '', loginError: '' };
    case SIGNUP_SUCCESS:
      return { ...state, isSigningUp: false, isAuthenticated: true };
    case SIGNUP_FAILURE:
      return { ...state, isSigningUp: false, isAuthenticated: false, signupError: action.message };
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, loginError: '' };
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, isLoggingIn: false, isAuthenticated: false, loginError: action.message };
    case RESET_PASS_REQUEST:
      return { ...state, isResettingPass: true, resetPassError: '' };
    case RESET_PASS_SUCCESS:
      return { ...state, isResettingPass: false, resetPassSuccess: true };
    case RESET_PASS_FAILURE:
      return { ...state, isResettingPass: false, resetPassError: action.message };
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
