import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  sessionReducer,
  errorsReducer,
});

export default rootReducer;
