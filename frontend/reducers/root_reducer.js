import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import car from './car_reducer';
import reviews from "./review_reducer";

const rootReducer = combineReducers({
  session,
  errors,
  car,
  reviews,
});

export default rootReducer;
