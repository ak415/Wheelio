class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :car_id, null: false
      t.float :user_rating, null: false

      t.timestamps
    end
      add_index :reviews, :body
  end
end
