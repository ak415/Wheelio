import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import reviewsReducer from './review_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  review: reviewsReducer
});

export default errorsReducer;
