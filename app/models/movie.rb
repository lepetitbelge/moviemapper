class Movie < ApplicationRecord
  has_many :movie_locations
  has_many :locations, through: :movie_locations

  validates :title, presence: true, uniqueness: { message: "title is already taken" }
  validates :year, presence: { message: "must be given please" }, numericality: true
  validates :rating, numericality: { message: "did you put a number?" }
end
