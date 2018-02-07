class Car < ApplicationRecord
  validates :year, :make, :model, :description, :mpg, :acceleration, :price, presence: true

  has_many :reviews,
    foreign_key: :car_id,
    class_name: :Review

  has_many :reviewers,
    through: :reviews,
    source: :user

  has_many :images,
    foreign_key: :car_id,
    class_name: :Image


    def self.search(query)
      new_query = query.split(" ")
      results = []

      new_query.each do |query|
        year_results = (Car.where("(cars.year) = ?" , "#{query}".to_i))
        make_results = Car.where("(cars.make) ilike ?", "%#{query}%")
        model_results = (Car.where("(cars.model) ilike ?" , "%#{query}%"))

        (make_results + year_results + model_results).each do |result|
          results << result
        end
      end

      results
      # Car.where("(cars.make) ilike ?", "%#{query}%")
      # .or(Car.where("(cars.model) ilike ?" , "%#{query}%"))
        # .or(Car.where("CAST((cars.year) AS CHAR) = ?" , "%#{query}%"))
    end
end
