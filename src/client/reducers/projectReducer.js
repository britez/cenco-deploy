import { FETCH_PROJECT } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_PROJECT:
      return action.payload.data;
    default:
      return state;
  }
};
