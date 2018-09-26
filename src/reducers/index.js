import { combineReducers } from 'redux';

import CollectionReducer from './reducer_collection';
import FilterReducer from './reducer_filter';

const rootReducer = combineReducers({
  collection: CollectionReducer,
  filteredCollection: FilterReducer
});

export default rootReducer;
