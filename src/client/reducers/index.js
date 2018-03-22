import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';

export default combineReducers({
  //users: usersReducer,
  //auth: authReducer,
  //admins: adminsReducer
  projects: projectsReducer,
  project: projectReducer,
});
