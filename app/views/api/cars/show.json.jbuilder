

  json.extract! @car, :id, :year, :make, :model, :description, :mpg_city, :mpg_highway, :acceleration, :price

  json.images do
    json.array! @car.images, :image_url
  end