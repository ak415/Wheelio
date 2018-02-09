json.extract! review, :id, :body, :user_id, :car_id, :user_rating, :upvotes, :upvoters
json.numUpvotes review.upvotes.count
