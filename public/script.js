function bar_button() {
  var pyrmont = { lat: 5.339479, lng: 100.298138 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 2000,
      type: ['bar']
    },
    callback
  );
}

function bakery_button() {
  var pyrmont = { lat: 5.339479, lng: 100.298138 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 2000,
      type: ['bakery']
    },
    callback
  );
}

function cafe_button() {
  var pyrmont = { lat: 5.339479, lng: 100.298138 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 2000,
      type: ['cafe']
    },
    callback
  );
}

function restaurant_button() {
  var pyrmont = { lat: 5.339479, lng: 100.298138 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 2000,
      type: ['restaurant']
    },
    callback
  );
}



