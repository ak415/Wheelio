import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import cars from './car_reducer';
import search from './search_reducer';
import reviews from "./review_reducer";

const rootReducer = combineReducers({
  session,
  errors,
  cars,
  reviews,
  search,
});

export default rootReducer;
