export const upvote = datum => {
  return $.ajax({
    method: 'POST',
    url: `api/upvotes`,
    data: { datum }
  });
};


export const downvote = datumId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/upvotes`,
  });
};
