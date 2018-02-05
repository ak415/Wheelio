class AddTopSpeed < ActiveRecord::Migration[5.1]
  def change
      remove_column :cars, :top_speed, :float
      add_column :cars, :top_speed, :float
  end
end
