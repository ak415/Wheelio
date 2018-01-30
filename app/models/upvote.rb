class Upvote < ApplicationRecord
  validates :user_id, :review_id, presence: true

  belongs_to :review
    foreign_key: :review_id,
    class_name: :Review

  belongs_to :user
    foreign_key: :user_id,
    class_name: :User
end
