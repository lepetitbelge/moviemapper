class AddLatitudeToLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :latitude, :integer
  end
end
