import * as CarAPIUtil from '../util/car_api_util';

export const RECEIVE_CAR = 'RECEIVE_CAR';

// ACTION CREATOR
export const receiveCar = car => ({
  type: RECEIVE_CAR,
  car
});


// THUNK ACTION
export const fetchCar = carId => dispatch => (
  CarAPIUtil.fetchCar(carId)
  .then( car => dispatch(receiveCar(car)))
);
