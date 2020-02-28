import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import users from './users';

export default combineReducers({ app, auth, users });
