class Review < ApplicationRecord
  validates :body, :user_id, :car_id, :user_rating, presence: true
  validate :review_too_short
  validate :rating_non_compliant

  belongs_to :car,
    foreign_key: :car_id,
    class_name: :Car

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :upvotes,
    foreign_key: :review_id,
    class_name: :Upvote

  has_many :upvoters,
    through: :upvotes,
    source: :user

  def review_too_short
      if (body.length < 20) && (body.length > 0)
        errors[:body] << "review too short, please add more information"
      end
  end

  def rating_non_compliant
      if !(1.0...10.1).include?(user_rating) && user_rating != nil
        errors[:Invalid] << "rating: please choose a number between 1 and 10"
      end
  end

end
