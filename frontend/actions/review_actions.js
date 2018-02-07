import * as ReviewAPIUtil from "../util/review_api_util";


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});
const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
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
    .then((newReview) => dispatch(receiveReview(newReview)));
};

export const updateReview = review => dispatch => {
  return ReviewAPIUtil.updateReview(review).then(
    (upreview) => dispatch(receiveReview(upreview)));
};

export const deleteReview = (reviewId) => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)));
};
