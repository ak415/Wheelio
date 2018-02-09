import * as UpvoteAPIUtil from "../util/upvote_api_util";


export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";


const receiveUpvote = upvote => ({
  type: RECEIVE_UPVOTE,
  upvote
});

const removeUpvote = upvote => ({
  type: REMOVE_UPVOTE,
  upvote
});


export const createUpvote = (upvote) => dispatch => {
  return UpvoteAPIUtil.createUpvote(upvote)
    .then((newUpvote) => dispatch(receiveUpvote(newUpvote)));
};

export const deleteUpvote = (upvoteId) => dispatch => {
  return UpvoteAPIUtil.deleteUpvote(upvoteId)
    .then((upvote) => dispatch(removeUpvote(upvote)));
};
