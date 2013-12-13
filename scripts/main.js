window.onload = function(){

  //initialize google map
  var gmap = App.GMap("map_tour");
  gmap.addMarker(38.691584, -9.215977, "Belem Tower", "Belem Tower");
  gmap.addMarker(38.693597, -9.205712, "Discoveries Monument", "Discoveries Monument");
  gmap.addMarker(38.6980952, -9.1790209, "Ponte 25 Abril", "Ponte 25 Abril");
  gmap.addMarker(38.713909, -9.133476, "Castle of Sao Jorge", "Castle of Sao Jorge");
  gmap.addMarker(38.7078908, -9.1369315, "Praça do Comércio", "Praça do Comércio");
  //gmap.addMarker(38.7101438, -9.1333138, "Largo Santo António da Sé", "Largo Santo António da Sé");
  //gmap.addMarker(38.6991685, -9.2203687, "Museu da Electricidade", "Museu da Electricidade");
  gmap.setMapCenter(38.690349, -9.189935);

  //initialize restaurant location map
  var location_map = App.GMap("location_map");
  location_map.setMapCenter(51.5106333, 0.1196833);
  location_map.addMarker(51.5440526, -0.135048, "Camden");

  // change logo for floating navbar
  $("#li_menu").hover(function(){
    $("#logo").toggleClass("logo_menu");
  });

  $("#li_locations").hover(function(){
    $("#logo").toggleClass("logo_locations");
  });

  $("#li_about").hover(function(){
    $("#logo").toggleClass("logo_about");
  });

  // expand experience view
  $("#tab").click(function(){
    deactivate_all_cards();
    $("#tab_content").toggleClass("active");
    //$("#map_tour").toggleClass("active");
  });

  // change background on dish hover
  $(".menu_dish").hover(function(){
    var dish_img = $(this).find(".dish_image");
    console.log(dish_img);
  });

  // expand dish information
  $(".expand_info").click(function(){
    $(this).toggleClass("expanded");
    $(this).parent().children(".dish_info").toggleClass("active");
  });

  //activate menus
  $("#li_menu").click(function(){
    if($("#card_location").hasClass("active")) {
      $("#card_location").toggleClass("active");
    }
    if($("#card_about").hasClass("active")) {
      $("#card_about").toggleClass("active");
    }
    $("#card_menu").toggleClass("active");
    activate_hover_floating_nav("#card_menu");
  });

  $("#li_locations").click(function(){
    if($("#card_menu").hasClass("active")) {
      $("#card_menu").toggleClass("active");
    }
    if($("#card_about").hasClass("active")) {
      $("#card_about").toggleClass("active");
    }
    $("#card_location").toggleClass("active");
    activate_hover_floating_nav("#card_location");
  });

  $("#li_about").click(function(){
    if($("#card_location").hasClass("active")) {
      $("#card_location").toggleClass("active");
    }
    if($("#card_menu").hasClass("active")) {
      $("#card_menu").toggleClass("active");
    }
    $("#card_about").toggleClass("active");
    activate_hover_floating_nav("#card_about");
  });

  //close cards
  $(".icon_close").click(function(){
    $(this).parent().parent().toggleClass("active");
  });
};

var activate_hover_floating_nav = function(menu_string){
  if($(menu_string).hasClass("active")) {
    $("#floating_nav").addClass("hover");
    $("#opaque_bg").addClass("active");
  }else {
    $("#floating_nav").removeClass("hover");
    $("#opaque_bg").removeClass("active");
  }
};

var deactivate_all_cards = function(){
  if($("#card_menu").hasClass("active")) {
    $("#card_menu").toggleClass("active");
  }
  if($("#card_about").hasClass("active")) {
    $("#card_about").toggleClass("active");
  }
  if($("#card_location").hasClass("active")) {
    $("#card_location").toggleClass("active");
  }
  activate_hover_floating_nav("#card_menu");
}
