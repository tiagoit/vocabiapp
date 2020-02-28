import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { verifyAuthAction } from './actions';
import rootReducer from './reducers';

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware),
  );

  store.dispatch(verifyAuthAction());
  return store;
}
