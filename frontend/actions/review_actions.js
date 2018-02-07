import * as ReviewAPIUtil from "../util/review_api_util";


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';


const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});
const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const receiveErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});


export const fetchReviews = (carId) => dispatch => {
  return ReviewAPIUtil.fetchReviews(carId)
    .then((reviews) => dispatch(receiveReviews(reviews)));
};


export const fetchReview = (reviewId) => dispatch => {
  return ReviewAPIUtil.fetchReview(reviewId)
    .then((review) => dispatch(receiveReview(review)));
};

export const createReview = (review) => dispatch => {
  return ReviewAPIUtil.createReview(review)
    .then((newReview) => dispatch(receiveReview(newReview)), err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateReview = review => dispatch => {
  return ReviewAPIUtil.updateReview(review).then(
    (upreview) => dispatch(receiveReview(upreview)), err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteReview = (reviewId) => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)));
};

export const clearError = () => dispatch => (
  dispatch(receiveErrors([]))
);
