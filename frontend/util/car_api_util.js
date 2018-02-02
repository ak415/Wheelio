
export const fetchCars = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/cars',
    data: {car: data},
  });
};


export const fetchCar = id => {
    $.ajax({
      method: 'GET',
      url: `api/cars/${id}`
    });
};
