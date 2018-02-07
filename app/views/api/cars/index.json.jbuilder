@cars.each do |car|
  json.set! car.id do
    json.extract! car, :id, :year, :make, :model, :description, :mpg_city, :mpg_highway, :acceleration, :top_speed, :price
    json.images do
      json.array! car.images, :image_url
    end
  end
end
