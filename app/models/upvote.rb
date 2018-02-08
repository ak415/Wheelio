class Upvote < ApplicationRecord
  validates :user_id, :review_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:review_id]


  belongs_to :review,
    foreign_key: :review_id,
    class_name: :Review

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
