$(document).ready(function(){
  $("#ctrl_menu").on("click", function(e){
    $("#location").css({"display": "none"});
  });

  $("#ctrl_home").on("click", function(e){
    $("#location").css({"display": "inline-block"});
  });

  //menu controls
  $("#appetizers").on("click", function(){
    $(".menu_content > .bg_img").css({
      "background-image": 'url("./static/images/menu/fish.jpg")'
    });
  });
  $("#soups").on("click", function(){
    $(".menu_content > .bg_img").css({
      "background-image": "url('./static/images/menu/egg.jpg')"
    });
  });
  $("#dishes").on("click", function(){
    $(".menu_content > .bg_img").css({
      "background-image": "url('./static/images/menu/fruits.jpg')"
    });
  });
});