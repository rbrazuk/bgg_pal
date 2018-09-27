import { REQUEST_COLLECTION } from '../actions';
import { FILTER_BY_OWNED } from '../actions';
import { FILTER_BY_WISHLIST } from '../actions';
import { RESET_FILTERS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case REQUEST_COLLECTION:
      console.log(action);
      return action.payload.data;
    case FILTER_BY_OWNED:
      return action.payload;
    case FILTER_BY_WISHLIST:
      return action.payload;
    case RESET_FILTERS:
      return action.payload;
    default:
      return state;
  }
}
