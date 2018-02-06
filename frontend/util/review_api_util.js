

export const fetchReviews = carId => {
  $.ajax({
    method: 'GET',
    url: 'api/cars/carId/reviews'
  });
};



export const fetchReview = reviewId => {
  $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  });
};


export const createReview = review => {
  $.ajax({
    method: 'POST',
    url: `api/cars/${review.car_id}/reviews`,
    data: { review }
  });
};

export const updateReview = review => {
  $.ajax({
    method: 'PATCH',
    url: `api/cars/${review.car_id}/reviews`,
    data: { review }
  });
};

export const deleteReview = review => {
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${review.id}`
  });
};
