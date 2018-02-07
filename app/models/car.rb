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
      Car.where("LOWER(cars.make) like ?", "%#{query}%")
  end
end
