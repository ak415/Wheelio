import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { fetchCar } from '../../actions/car_actions';
import { fetchReviews, fetchReview, createReview, updateReview, deleteReview } from '../../actions/review_actions';
import { login, logout, signup, clearError } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path === "/cars/:carId/reviews/new") {
    let review = {
      user_rating: "",
      body: "",
      car_id: ownProps.match.params.carId,
      user_id: state.session.currentUser.id
    };

    return {
      formType: "new",
      review,
      errors: state.errors.review,
      car: state.car[ownProps.match.params.carId],
      currentUser: state.session.currentUser,
    };
  } else {
    let review = {};

    if  (state.reviews[ownProps.match.params.reviewId]) {
      review = state.reviews[ownProps.match.params.reviewId];
    }
    let id;
    review[id] = ownProps.match.params.reviewId;

    return {
      formType: "edit",
      review,
      car: state.car[ownProps.match.params.carId],
      currentUser: state.session.currentUser,
      errors: state.errors.review,
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/cars/:carId/reviews/new") {
    return {
      createReview: review => dispatch(createReview(review)),
      clearError: () => dispatch(clearError()),
      fetchCar: carId => dispatch(fetchCar(carId)),
      logout: () => dispatch(logout()),
    };
  } else {
    return {
      fetchReview: reviewId => dispatch(fetchReview(reviewId)),
      updateReview: review => dispatch(updateReview(review)),
      clearError: () => dispatch(clearError()),
      fetchCar: carId => dispatch(fetchCar(carId)),
      logout: () => dispatch(logout()),
    };
  }
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
