
export const fetchCars = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/cars'
  });
};


export const fetchCar = id => (
   $.ajax({
      method: 'GET',
      url: `api/cars/${id}`
    })
);

export const findCars = (params) => {
  return $.ajax({
    method: "GET",
    url: "api/cars",
    data: { query: params }
  });
};
