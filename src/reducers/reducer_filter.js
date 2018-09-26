import { FILTER_BY_OWNED } from '../actions';
import { RESET_FILTERS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FILTER_BY_OWNED:
      console.log("filter by owned called");
      return action.payload;
    case RESET_FILTERS:
      return action.payload;
    default:
      return state;
  }
}
