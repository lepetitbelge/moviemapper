import mapboxgl from 'mapbox-gl';

const mapBoxMarkers = (locationsArray) => {
  const mapMarker = mapboxSdk({ accessToken: mapboxgl.accessToken });
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10',
    center: [4,51],
    zoom: 0
  });
  console.log(map)
  locationsArray.forEach((location) => {
    mapMarker.geocoding.forwardGeocode({
      query: location,
      autocomplete: false,
      limit: 1
    })
    .send()
    .then(function (response) {
      if (response && response.body && response.body.features && response.body.features.length)
      {
        const feature = response.body.features[0];
        new mapboxgl.Marker()
        .setLngLat(feature.center)
        .addTo(map);
      }
    });
  });

}


const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [4,51],
      zoom: 0
    });
  }
};

export { initMapbox };
export { mapBoxMarkers };
