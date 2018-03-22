import { FETCH_PROJECTS } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload.data;
    default:
      return state;
  }
};
