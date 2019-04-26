class ChangeRatingToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :movies, :rating, :float
  end
end
