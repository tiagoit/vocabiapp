/* eslint-disable newline-per-chained-call */
/* eslint-disable object-curly-newline */
/* eslint-disable no-multi-spaces */

import { db } from '../../firebase/firebase';

export const GET = 'GET';
export const RECEIVE_SET = 'RECEIVE_SET';
export const RECEIVE_UPDATE = 'RECEIVE_UPDATE';
export const START_REQUEST = 'START_REQUEST';

const startRequest = () => ({ type: START_REQUEST });
const receiveSet = (user) => ({ type: RECEIVE_SET, user });
const receiveUpdate = (user) => ({ type: RECEIVE_UPDATE, user });

export const getUser = (uid) => (dispatch) => {
  dispatch(startRequest());
  db.collection('users').doc(uid).get().then((res) => {
    dispatch(receiveSet(res.data()));
  });
};

export const setUser = (uid, data) => (dispatch) => {
  dispatch(startRequest());
  db.collection('users').doc(uid).set(data).then(() => {
    dispatch(receiveSet(data));
  });
};

export const updateUser = (uid, data) => (dispatch) => {
  dispatch(startRequest());
  db.collection('users').doc(uid).update(data).then(() => {
    dispatch(receiveUpdate(data));
  });
};
