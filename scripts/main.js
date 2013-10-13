$(document).ready(function(){
  $("#ctrl_menu").on("click", function(e){
    $("#location").css({"display": "none"});
  });

  $("#ctrl_home").on("click", function(e){
    $("#location").css({"display": "inline-block"});
  });
});