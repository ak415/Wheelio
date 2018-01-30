class CreateUpvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :upvotes do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false

      t.timestamps
    end
      add_index :upvotes, :user_id
      add_index :upvotes, :review_id
  end
end
