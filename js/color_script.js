var map;
function initMap() {

  var map = new google.maps.Map(document.getElementById('canvas'), {
    center: {lat: 35.68683092590189, lng: 139.75276691412049},
	zoom: 11
  });

  var Palace = new google.maps.Marker({
    position: {lat: 35.68683092590189, lng: 139.75276691412049},
	map: map
  });

  var Skytree = new google.maps.Marker({
    position: {lat: 35.770654805822694, lng: 139.7975586080468}, 
	map: map
  });

  var Crossing = new google.maps.Marker({
	position: {lat: 35.65957633268136, lng: 139.70052411989343}, 
	map: map
  });
  }
  
  var map = new google.maps.Map(el, mapOptions);
  
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var marker = new google.maps.Marker({
    position: {lat: 35.68683092590189, lng: 139.75276691412049},
    map: map,
    icon: iconBase + 'parking_lot_maps.png'
  });
	
  var contentString = '<h2>The Imperial Palace</h2>';

  var infowindow = new google.maps.InfoWindow({
    content: contnetString,
	ariaLable: "Palace"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(myMap, Marker);
  });

google.maps.event.addDomListener(window, 'load', init);