import { combineReducers } from 'redux';

import CollectionReducer from './reducer_collection';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  collection: CollectionReducer,
  currentUser: UserReducer
});

export default rootReducer;
