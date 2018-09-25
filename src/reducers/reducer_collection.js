import { REQUEST_COLLECTION } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case REQUEST_COLLECTION:
      return action.payload.data;
    default:
      return state;
  }
}
