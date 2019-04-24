import mapboxgl from 'mapbox-gl';

const createMap = () => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    center: [15,28],
    zoom: 1
  });
}

const mapBoxMarkers = (locationsArray) => {
  const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    center: [15,28],
    zoom: 1
  });
  locationsArray.forEach((location) => {
    mapboxClient.geocoding.forwardGeocode({
      query: location,
      autocomplete: false,
      limit: 1
    })
    .send()
    .then(function (response) {
      if (response.body.features.length) {
        const marker = document.createElement('div');
              marker.innerHTML = '📌';
              // marker.classList.add("location-icon");
        const popup = new mapboxgl.Popup({ offset: 25 })
                                  .setText(location);

        const feature = response.body.features[0];

        new mapboxgl.Marker(marker)
                    .setLngLat(feature.center)
                    .setPopup(popup)
                    .addTo(map);

        marker.addEventListener('click', () => {
          map.flyTo({
            center: feature.center,
            zoom: 15,
          });
        });
      };
    });
  });
}

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    createMap();
  }
};

export { initMapbox };
export { mapBoxMarkers };
