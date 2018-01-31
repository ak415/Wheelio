class Review < ApplicationRecord
  validates :body, :user_id, :car_id, :user_rating, presence: true
  validate :review_too_short

  belongs_to :car,
    foreign_key: :car_id,
    class_name: :Car

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :upvotes,
    foreign_key: :review_id,
    class_name: :Upvote

  def review_too_short
      if body.length < 20
        errors[:body] << "review too short, please add more information"
      end
  end

end
