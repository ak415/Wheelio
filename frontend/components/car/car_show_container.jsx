import React from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../../actions/car_actions';
import { deleteReview } from '../../actions/review_actions';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';
import CarShow from './car_show';
import { logout, login } from '../../actions/session_actions';
import {  withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let car = state.cars[ownProps.match.params.carId];
  return {
    car,
    currentUser: state.session.currentUser,
    images: state.cars.images,
    reviews: Object.values(state.reviews),
    upvotes: state.upvotes
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCar: (carId) => dispatch(fetchCar(carId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
    deleteUpvote: (upvoteId) => dispatch(deleteUpvote(upvoteId)),
    logout: () => dispatch(logout())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarShow);
