import { SET_CURRENT_USER } from '../actions';
import { REQUEST_COLLECTION } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(action);
      return action.currentUser;
    default:
      return state;
  }
}
