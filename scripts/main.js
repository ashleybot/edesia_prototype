App.prev_ship_imgnum = 2;

window.onload = function(){
  //initialize restaurant location map
  var location_map = App.GMap("location_map");
  location_map.setMapCenter(51.512432, -0.141823);
  location_map.addMarker(51.512432, -0.141823, "Conduit St. ");

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
    $("#opaque_bg").toggleClass("active");
    // $("#floating_nav").removeClass("hover");
    // $("#social_media").removeClass("hover");
  });

  //menu hover
  $(".menu_dish").hover(function(){
    var dish_img_src = $(this).find(".dish_image").attr("src");
    var dish_p_text = $(this).find(".long_desc").text();

    $("#dish_expand").find("img").attr("src", dish_img_src);
    $("#dish_expand").find("p").text(dish_p_text);
  });

  //ship 3d thingie
  $("#threed").mousemove(function(e){
    var pagewidth = window.innerWidth;
    var numimages = 50;
    var diff = Math.floor(pagewidth / numimages);
    var img_num = Math.min(Math.floor(e.pageX/diff), 50) + 407;
    if(img_num != App.prev_ship_imgnum) {
      var counter = img_num > App.prev_ship_imgnum ? 1 : -1;
      while(img_num - App.prev_ship_imgnum != 0) {
        App.prev_ship_imgnum = App.prev_ship_imgnum + counter;
        $("#ship").attr("src", "static/images/ship/final0" + App.prev_ship_imgnum + ".png");
      }

      // var move = Math.min(e.pageX - 600, 0).toString() + "px";
      // $("#youtube_video").css({
      //   "left": move
      // });
    }
    App.prev_ship_imgnum = parseInt(img_num);
  });

  // experience tab hover
  $(".sq").hover(function(){
    $(this).toggleClass("active");
  });

  //landmark pages activate scroll
  $("#right_scroll").click(function(){
    console.log("hello");
    $("body").animate({
      scrollTop: $(window).scrollTop() + 300
    });
  });

  $("#left_scroll").click(function(){
    $("body").animate({
      scrollTop: $(window).scrollTop() - 300
    });
  });
};

var activate_hover_floating_nav = function(menu_string){
  if($(menu_string).hasClass("active")) {
    //$("#floating_nav").addClass("hover");
    //$("#social_media").addClass("hover");
    $("#opaque_bg").addClass("active");
  }else {
    //$("#floating_nav").removeClass("hover");
    //$("#social_media").removeClass("hover");
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
  //activate_hover_floating_nav("#card_menu");
}
