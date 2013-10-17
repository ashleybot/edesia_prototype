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

  var mid_width = $("body").width()/2;
  console.log(mid_width);
  $("#hairline").on("click", function(e){
          $("#map_overlay").toggleClass("hide");
          $("#overlay").toggleClass("hide");
          $("#menu_overlay").toggleClass("hide");
          $(this).toggleClass("hide");
  });

  $(window).on("mousemove", function(e){
    var diff = event.clientX - mid_width;
    var rate = (1/mid_width)*diff;
    var current_bgpx = parseFloat($("body").css("background-position-x"));
    console.log(rate);
    console.log(current_bgpx);
    var per = (current_bgpx + rate);
    if(per >= 0 && per <= 100){
      $("body").css({
       "background-position-x": per.toString() + "%"
      });
    }
  });
};