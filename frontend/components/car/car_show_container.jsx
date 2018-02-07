import React from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../../actions/car_actions';
import { deleteReview } from '../../actions/review_actions';
import CarShow from './car_show';
import {  withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
console.log("mapping");

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
    fetchCar: (carId) => dispatch(fetchCar(carId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarShow);
