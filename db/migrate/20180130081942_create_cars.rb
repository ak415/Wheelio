class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.integer :year, null: false
      t.string :make, null: false
      t.string :model, null: false
      t.text :description, null: false
      t.float :mpg, null: false
      t.float :mpg_city
      t.float :mpg_highway
      t.float :acceleration, null: false
      t.float :price, null: false

      t.timestamps
    end
      add_index :cars, :make
      add_index :cars, :model
      add_index :cars, :year
  end
end
