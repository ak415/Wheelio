import merge from 'lodash/merge';

import {
  RECEIVE_CAR,
  RECEIVE_CARS
} from '../actions/car_actions';

const carReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAR:
      return merge({}, state, {[action.payload.car.id]: action.payload.car});
    case RECEIVE_CARS:
      return merge({}, state, action.payload);
    default:
      return state;
  }
};

export default carReducer;
