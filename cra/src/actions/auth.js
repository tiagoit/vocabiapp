/* eslint-disable no-multi-spaces */

import { firebaseApp } from '../firebase/firebase';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

const requestLogin  = () => ({ type: LOGIN_REQUEST });
const receiveLogin  = (user) => ({ type: LOGIN_SUCCESS, user });
const loginError    = () => ({ type: LOGIN_FAILURE });
const requestSignup = () => ({ type: SIGNUP_REQUEST });
const receiveSignup = (user) => ({ type: SIGNUP_SUCCESS, user });
const signupError   = () => ({ type: SIGNUP_FAILURE });
const requestLogout = () => ({ type: LOGOUT_REQUEST });
const receiveLogout = () => ({ type: LOGOUT_SUCCESS });
const logoutError   = () => ({ type: LOGOUT_FAILURE });
const verifyRequest = () => ({ type: VERIFY_REQUEST });
const verifySuccess = () => ({ type: VERIFY_SUCCESS });

export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  firebaseApp.auth().signInWithEmailAndPassword(email, password).then((user) => {
    dispatch(receiveLogin(user));
  }).catch(() => {
    dispatch(loginError());
  });
};

export const signupUser = (name, email, password) => (dispatch) => {
  dispatch(requestSignup());
  firebaseApp.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    console.log('sigupUser: ', { user });
    dispatch(receiveSignup(user));
  }).catch(() => {
    dispatch(signupError());
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  firebaseApp.auth().signOut().then(() => {
    dispatch(receiveLogout());
  }).catch(() => {
    // Do something with the error if you want!
    dispatch(logoutError());
  });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
