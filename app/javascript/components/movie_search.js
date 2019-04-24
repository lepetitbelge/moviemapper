import fetchJsonp from 'fetch-jsonp';
import { mapBoxMarkers } from '../packs/map';

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
};

const cleanSearchOptions = () => {
  const searchOptions = document.querySelector('.search-options');
  if(searchOptions == 'undefined' || searchOptions == null ) {
    console.log('nothing to be done');
  } else {
    $('.search-options').remove();
  };
};

const specifyMovie = (json) => {
  const searchBar = document.querySelector('.search-bar');
  const searchOptions = document.createElement('div');
        searchOptions.classList.add("search-options");
        searchOptions.innerHTML =
        `<p>Did you mean?</p>
        <ul>
          ${
            json.data.movies.map(function (movie, index) {
            if(!movie.title){movie.title = "?"}
            if(!movie.year){movie.year = "?"}
            if(!movie.rating){movie.rating = "?"}
            return `<li id="${index}">
                    ${movie.title} (${movie.year}) - IMDb <strong>[${movie.rating}/10]</strong> </li>`
            }).join('')
          }
        </ul>`;
  insertAfter(searchOptions, searchBar);
};

// const movieDescription = () => {

// };

const filmLocations = (cleanQuery) => {
  const url = `https://www.myapifilms.com/imdb/idIMDB?title=${cleanQuery}&token=996c2225-65cb-46b4-a895-043584a46968&format=json&language=en-us&aka=0&filter=3&limit=5&filmingLocations=2`;
  fetchJsonp(url, {
    jsonpCallback: 'callback',
  })
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log('parsed json', json);
    // debugger
    if(json.data.movies.length === 1){
      let locationsArray = []
      json.data.movies[0].filmingLocations.forEach((location) => {
        locationsArray.push(location.location)
      });
      // movieDescription();
      mapBoxMarkers(locationsArray);
    }
    else if(json.data.movies.length === 0){
      return "We're sorry, this search was not possible. Please try again :)"
    }
    else if(json.data.movies.length > 1) {
      specifyMovie(json);
    }
  }).catch(function(ex) {
    console.log('parsing failed', ex);
  })
}

const movieSearch = () => {
  const searchForm = document.querySelector('.search-bar');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cleanQuery = event.srcElement[0].value.trim().replace(' ','+');
    cleanSearchOptions();
    filmLocations(cleanQuery);
  });
}

const initMovieSearch = () => {
  movieSearch();
}

export { initMovieSearch };
