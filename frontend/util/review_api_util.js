

export const fetchReviews = carId => {
  return $.ajax({
    method: 'GET',
    url: 'api/cars/carId/reviews'
  });
};



export const fetchReview = reviewId => {
return  $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  });
};


export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: `api/cars/${review.car_id}/reviews`,
    data: { review }
  });
};

export const updateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `api/cars/${review.car_id}/reviews`,
    data: { review }
  });
};

export const deleteReview = reviewId => {
return  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  });
};
