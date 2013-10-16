window.onload = function(){
  var gmap = App.GMap("map_overlay");
  gmap.addMarker(38.739618, -9.149655, "Lisbon", $(".lisbon_location").get(0));
  gmap.setMapCenter(38.739618, -9.149655);

  var maxheight = $("#menu_overlay").height()*0.85;
  $("#menu_overlay").scroll(function(e){
  	console.log($("#menu_overlay").scrollTop());
  	//change opacity of #overlay
  	$("#overlay").css({
  		"opacity": $("#menu_overlay").scrollTop()/maxheight
  	});
  });
};