import {
  CONFIG_REQUEST,
  CONFIG_SUCCESS,
  CONFIG_FAILURE,
} from '../actions';

export default (
  state = {
    isGettingConfig: false,
    signupError: false,
    config: {},
  },
  action,
) => {
  switch (action.type) {
    case CONFIG_REQUEST:
      return { ...state, isGettingConfig: true, configError: false };
    case CONFIG_SUCCESS:
      return { ...state, isGettingConfig: false, user: action.user };
    case CONFIG_FAILURE:
      return { ...state, isGettingConfig: false, configError: true };
    default:
      return state;
  }
};
