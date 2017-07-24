
  function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 37.413754, lng: -79.142246}
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }
  var locations = [
    {lat: 37.487872, lng: -79.132626},
    {lat: 37.380903, lng: -79.307486},
    {lat: 37.396406, lng: -79.168890},
    {lat: 37.352709, lng: -79.231868}
  ]
