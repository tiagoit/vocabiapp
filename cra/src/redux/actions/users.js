/* eslint-disable newline-per-chained-call */
/* eslint-disable object-curly-newline */
/* eslint-disable no-multi-spaces */

import { db } from '../../firebase/firebase';

export const GET = 'GET';
export const RECEIVE_SET = 'RECEIVE_SET';
export const RECEIVE_UPDATE = 'RECEIVE_UPDATE';
export const START_REQUEST = 'START_REQUEST';

const startRequestAction = () => ({ type: START_REQUEST });
const receiveSetAction = (user) => ({ type: RECEIVE_SET, user });
const receiveUpdateAction = (user) => ({ type: RECEIVE_UPDATE, user });

export const getUserAction = (uid) => (dispatch) => {
  dispatch(startRequestAction());
  db.collection('users').doc(uid).get().then((res) => {
    dispatch(receiveSetAction(res.data()));
  });
};

export const setUserAction = (uid, data) => (dispatch) => {
  dispatch(startRequestAction());
  db.collection('users').doc(uid).set(data).then(() => {
    dispatch(receiveSetAction(data));
  });
};

export const updateUserAction = (uid, data) => (dispatch) => {
  dispatch(startRequestAction());
  db.collection('users').doc(uid).update(data).then(() => {
    dispatch(receiveUpdateAction(data));
  });
};
