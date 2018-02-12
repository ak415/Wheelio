import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";

import {RECEIVE_UPVOTE, REMOVE_UPVOTE } from "../actions/upvote_actions";


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
    case RECEIVE_UPVOTE:
      let newState2 = merge( {}, oldState);
      newState2[action.upvote.review_id].upvotes.push(action.upvote);
      return newState2;
    case REMOVE_UPVOTE:
      let newState3 = merge( {}, oldState);
      let repArray = [];
      for (var i = 0; i < newState3[action.upvote.review_id].upvotes.length; i++) {
        if (newState3[action.upvote.review_id].upvotes[i].id == action.upvote.id) {
          continue;
        }
        repArray.push(newState3[action.upvote.review_id].upvotes[i]);
      }
      newState3[action.upvote.review_id].upvotes = repArray;
      return newState3;
    default:
      return oldState;
  }
};

export default ReviewReducer;
