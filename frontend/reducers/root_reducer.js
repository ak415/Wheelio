import { combineReducers } from 'redux';

import session from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session,
  errorsReducer,
});

export default rootReducer;
