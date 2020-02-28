import {
  START_LOAD,
  STOP_LOAD,
} from '../actions';

export default (
  state = {
    loading: new Set(),
    isLoading: false,
  },
  action,
) => {
  const loading = new Set(state.loading);
  switch (action.type) {
    case START_LOAD:
      loading.add(action.resource);
      return { ...state, loading, isLoading: true };
    case STOP_LOAD:
      loading.delete(action.resource);
      return { ...state, loading, isLoading: !!loading.size };
    default:
      return state;
  }
};
