import merge from 'lodash/merge';
import {
  RECEIVE_UPVOTE,
  REMOVE_UPVOTE
} from '../actions/upvote_actions';


const UpvoteReducer = (oldState = {} , action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_UPVOTE:
      return action.upvote;
    case REMOVE_UPVOTE:
      let newState = merge({}, oldState);
      debugger;
      delete newState[action.upvoteId];
      return newState;
    default:
      return oldState;
  }
};

export default UpvoteReducer;
