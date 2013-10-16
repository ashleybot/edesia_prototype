var App = {};

App.GMap = function(in_element){
	var mapOptions = {
    zoom: 12,
    disableDefaultUI: true,
    draggable: false,
    disableDoubleClickZoom: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
	};

  var map = new google.maps.Map(document.getElementById(in_element), mapOptions);

  return {
    addMarker: function(in_lat, in_lng, in_title) {
      var newLatlng = new google.maps.LatLng(in_lat, in_lng);
      var marker = new google.maps.Marker({
        position: newLatlng,
        map: map,
        title: in_title
      });

      if(arguments.length === 4) {
        //define infowindow
        var infowindow = new google.maps.InfoWindow({
          content: arguments[3]
        });

        infowindow.open(map, marker);
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      }
    },

    setMapCenter: function(in_lat, in_lng) {
      var newLatlng = new google.maps.LatLng(in_lat, in_lng);
      map.setCenter(newLatlng);
    }
  }
};