export const createUpvote = upvote => {
  return $.ajax({
    method: 'POST',
    url: `api/reviews/${upvote.review_id}/upvotes`,
    data: { upvote }
  });
};


export const deleteUpvote = upvoteId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/upvotes/${upvoteId}`,
  });
};
