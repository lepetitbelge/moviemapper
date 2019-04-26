require 'rails_helper'

describe Movie do
  context "When testing, the movie class" do
    it "should: have a valid title, year and rating" do
      movie = Movie.new(title: "Ice Age", year: 2009, rating: 8.8)
      expect(movie).to have_attributes(title: "Ice Age", year: 2009, rating: 8.8)
      puts "valid title, year and rating"
    end

    it "should: have an error when title is empty string" do
      movie = Movie.new(title: "", year: 2000, rating: 5.0)
      expect(movie).not_to be_valid(movie)
      puts "movie isn't valid"
    end
  end
end
