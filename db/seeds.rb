#destroy all records
Movie.destroy_all
Location.destroy_all
MovieLocation.destroy_all

# creates 20 movies
# creates 100 locations
# links each movie with 3-10 locations
puts "creating 100 locations"
100.times do
  location = Location.create(
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    address: Faker::Address.full_address
    )
end
puts "creating 20 movies"
20.times do
  movie = Movie.create(
    title: Faker::Book.title,
    year: rand(1950..2019),
    rating: rand(0..10)
    )
end

puts "creating 200 links"
200.times do
  movie_location = MovieLocation.create(
    movie_id: Movie.all.sample.id,
    location_id: Location.all.sample.id
    )
end
