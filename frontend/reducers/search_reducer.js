import merge from 'lodash/merge';

import { RECEIVE_CARS } from '../actions/car_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARS:
      console.log("search reducer activated");
      console.log(merge({}, action.payload));
      return merge({}, action.payload);
    default:
      return state;
  }
};


export default searchReducer;
