/* eslint-disable newline-per-chained-call */
/* eslint-disable object-curly-newline */
/* eslint-disable no-multi-spaces */

import { firebaseApp } from '../../firebase/firebase';
import { getUserAction, setUserAction } from './users';
import { stopLoadAction } from './app';


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

export const USER_UPDATE = 'USER_UPDATE';

const requestLoginAction  = () => ({ type: LOGIN_REQUEST });
const receiveLoginAction  = () => ({ type: LOGIN_SUCCESS });
const requestSignupAction = () => ({ type: SIGNUP_REQUEST });
const receiveSignupAction = () => ({ type: SIGNUP_SUCCESS });
const requestLogoutAction = () => ({ type: LOGOUT_REQUEST });
const receiveLogoutAction = () => ({ type: LOGOUT_SUCCESS });
const logoutErrorAction   = () => ({ type: LOGOUT_FAILURE });
const verifyRequestAction = () => ({ type: VERIFY_REQUEST });
const verifySuccessAction = () => ({ type: VERIFY_SUCCESS });

export const loginErrorAction = (message) => ({ type: LOGIN_FAILURE, message });
export const signupErrorAction = (message) => ({ type: SIGNUP_FAILURE, message });

export const signupUserAction = (name, email, password) => (dispatch) => {
  dispatch(requestSignupAction());
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      dispatch(setUserAction(auth.user.uid, { uid: auth.user.uid, name, email }));
      dispatch(receiveSignupAction());
    })
    .catch((err) => dispatch(signupErrorAction(err.message)))
    .finally(() => dispatch(stopLoadAction('signup')));
};


export const loginUserAction = (email, password) => (dispatch) => {
  dispatch(requestLoginAction());
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then((auth) => {
      dispatch(getUserAction(auth.user.uid));
      dispatch(receiveLoginAction());
    })
    .catch((err) => dispatch(loginErrorAction(err.message)))
    .finally(() => dispatch(stopLoadAction('login')));
};

export const logoutUserAction = () => (dispatch) => {
  dispatch(requestLogoutAction());
  firebaseApp.auth().signOut()
    .then(() => dispatch(receiveLogoutAction()))
    .catch(() => dispatch(logoutErrorAction()));
};

export const verifyAuthAction = () => (dispatch) => {
  dispatch(verifyRequestAction());
  firebaseApp.auth().onAuthStateChanged(async (user) => {
    if (user !== null) {
      dispatch(receiveLoginAction());
      dispatch(getUserAction(user.uid));
    }
    dispatch(verifySuccessAction());
  });
};
