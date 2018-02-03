
json.car do
  json.extract! @car, :year, :make, :model, :description, :mpg, :acceleration, :price

  json.images do
    json.array! @car.images, :image_url
  end
end
