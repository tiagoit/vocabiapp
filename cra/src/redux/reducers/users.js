/* eslint-disable object-curly-newline */

import {
  START_REQUEST,
  RECEIVE_SET,
  RECEIVE_UPDATE,
} from '../actions';

export default (
  state = {
    isRequesting: false,
    user: {
      uid: '',
      name: '',
      email: '',
      sourceLang: '',
      targetLang: '',
    },
  },
  action,
) => {
  switch (action.type) {
    case START_REQUEST:
      return { ...state, isRequesting: true };
    case RECEIVE_SET:
      return { ...state, isRequesting: false, user: action.user };
    case RECEIVE_UPDATE:
      return { ...state, isRequesting: false, user: { ...state.user, ...action.user } };
    default:
      return state;
  }
};
