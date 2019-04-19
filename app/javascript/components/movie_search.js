import fetchJsonp from 'fetch-jsonp';

const initMovieSearch = () => {

  const url = "https://www.myapifilms.com/imdb/idIMDB?title=harry+potter&token=996c2225-65cb-46b4-a895-043584a46968&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=3&exactFilter=0&limit=1&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=1&biography=0&actorActress=0&similarMovies=0&adultSearch=0&goofs=0&keyword=0&quotes=0&fullSize=0&companyCredits=0&filmingLocations=2";
  fetchJsonp(url, {
    jsonpCallback: 'callback',
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}

export { initMovieSearch };
