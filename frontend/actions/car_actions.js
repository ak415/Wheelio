import * as CarAPIUtil from '../util/car_api_util';

export const RECEIVE_CAR = 'RECEIVE_CAR';
export const RECEIVE_CARS = 'RECEIVE_CARS';

// ACTION CREATOR
export const receiveCar = payload => ({
  type: RECEIVE_CAR,
  payload
});

export const receiveCars = payload => ({
  type: RECEIVE_CARS,
  payload
});

// THUNK ACTION
export const fetchCar = carId => dispatch => (
  CarAPIUtil.fetchCar(carId)
  .then( car => dispatch(receiveCar(car)))
);


export const fetchCars = () => (dispatch) => (
  CarAPIUtil.fetchCars().then(
    cars => dispatch(receiveCars(cars))
  )
);


export const findCars = (query) => (dispatch) => (
  CarAPIUtil.findCars(query).then(
    cars => dispatch(receiveCars(cars))
  )
);
