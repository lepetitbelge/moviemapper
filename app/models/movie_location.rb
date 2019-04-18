class MovieLocation < ApplicationRecord
  belongs_to :movie
  belongs_to :location

  validates_presence_of :movie, :location
end
