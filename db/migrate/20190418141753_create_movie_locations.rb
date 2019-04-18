class CreateMovieLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_locations do |t|
      t.references :movie, foreign_key: true
      t.references :location, foreign_key: true

      t.timestamps
    end
  end
end
