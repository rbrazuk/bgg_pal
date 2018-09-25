import { combineReducers } from 'redux';

import CollectionReducer from './reducer_collection';

const rootReducer = combineReducers({
  collection: CollectionReducer
});

export default rootReducer;
