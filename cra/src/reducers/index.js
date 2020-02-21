import { combineReducers } from 'redux';
import auth from './auth';
import config from './config';

export default combineReducers({ auth, config });
