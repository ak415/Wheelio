import React from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../../actions/car_actions';
import CarShow from './car_show';

const mapStateToProps = (state, ownProps) => {

  console.log(ownProps);
  let car = state.car[ownProps.match.params.carId];
  return {
    car,
    currentUser: state.session.currentUser,
    images: state.car.images,
    carImageIndex: 0,
    reviews: Object.values(state.reviews)
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCar: (carId) => dispatch(fetchCar(carId))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarShow);
