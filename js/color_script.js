function init (){
  var el = document.getElementByID('canvas');
  var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var mapOptions = {
    center: mylocation,
	zoom:18,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
	  position: google.maps.ContolPosition.BOTTOM_CENTER
	}
  };
  
 google.maps.event.addDomListener(window, 'load', init);