import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";

import { RECEIVE_CAR } from '../actions/car_actions';
import merge from "lodash/merge";


const ReviewReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let newState = merge({}, oldState);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_CAR:
      return action.payload.reviews || {};

    default:
    console.log(action.type);
      return oldState;
  }
};

export default ReviewReducer;
