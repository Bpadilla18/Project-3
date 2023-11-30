
function initMap() {

  const map = new google.maps.Map(document.getElementById('canvas'), {
    center: {lat: 35.68683092590189, lng: 139.75276691412049},
	zoom: 11
  });

  const Palace = new google.maps.Marker({
    position: {lat: 35.68683092590189, lng: 139.75276691412049},
	map: map
  });

  const Skytree = new google.maps.Marker({
    position: {lat: 35.770654805822694, lng: 139.7975586080468}, 
	map: map
  });

  const Crossing = new google.maps.Marker({
	position: {lat: 35.65957633268136, lng: 139.70052411989343}, 
	map: map
  });
  }
  
  const map = new google.maps.Map(el, mapOptions);
  
	
  const contentString = '<h2>The Imperial Palace</h2>';

  const infowindow = new google.maps.InfoWindow({
    content: contnetString,
	ariaLable: "Palace"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(myMap, Marker);
  });
  
  const marker = new google.maps.Marker({
    position: {lat: 35.68683092590189, lng: 139.75276691412049},
    map,
    title: "Imperial Palace",
	icon: {
    url:"media/Tokyo-imperial-palace.png",
	scaledSize: new google.maps.Size(86,80),
	},
   });

google.maps.event.addDomListener(window, 'load', init);