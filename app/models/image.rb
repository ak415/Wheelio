class Image < ApplicationRecord
  validates :car_id, :image_url, presence: true

  belongs_to :car,
    foreign_key: :car_id,
    class_name: :Car

end
