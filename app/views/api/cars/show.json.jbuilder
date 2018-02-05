

  json.extract! @car, :id, :year, :make, :model, :description, :mpg_city, :mpg_highway, :acceleration, :top_speed, :price

  json.images do
    json.array! @car.images, :image_url
  end


  json.reviews do
    json.array! @car.reviews, :user_id, :body, :user_rating, :created_at, :updated_at
  end

  json.reviewers do
    json.array! @car.reviewers, :id, :username
  end
