import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';

import { initMapbox } from '../packs/map';
initMapbox();

import { initMovieSearch } from '../components/movie_search';
// import { mapBoxMarkers } from '../packs/map';
initMovieSearch();

