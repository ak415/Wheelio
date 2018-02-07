
  json.car do
    json.extract! @car, :id, :year, :make, :model, :description, :mpg_city, :mpg_highway, :acceleration, :top_speed, :price
    json.images do
      json.array! @car.images, :image_url
    end

  end


  json.reviews do
    @car.reviews.each do |review|
        json.set! review.id do
          json.extract! review, :id, :user_id, :body, :user_rating, :created_at, :updated_at
          json.username review.user.username
        end
    end
  end
