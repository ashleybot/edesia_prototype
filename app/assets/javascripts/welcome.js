// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {    
  var inside = true;
  var push_left, push_right = false;
  
  $('#logo').click(function(){
      $('#inside').fadeIn();
      $('#ui').fadeIn();
      inside = true;
  });
    
  $('#porthole_container').click(function() {
    $('#inside').fadeOut();
    $('#ui').fadeOut();
    inside = false;
  });
  
  $('#push_left').hover(function(){
    //$('#outside').animate({backgroundPositionZ: "20px"}, 500);
    console.log("go left");
    push_left = true;
  }, function(){
    push_left = false;
  });
  
  $('#push_right').hover(function(){
    push_right = true;
    console.log("go right");
  }, function(){
    push_right = false;
  });
  
});