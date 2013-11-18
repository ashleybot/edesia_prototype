// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {    
  var inside = true;
  var push_left, push_right = false;
  
  /*$('#outside').toggle(function() {
    $("#outside").animate({backgroundPositionY: '-=100px'}, 4000);
  }, function() {
    $("#outside").animate({backgroundPositionY: '+=100px'}, 4000);
  });*/
  
  $('#logo').click(function(){
      $('#inside').fadeIn();
      $('#ui').fadeIn();
      //$('#logo').html('Back');
      inside = true;
  });
    
  $('#porthole_container').click(function() {
    $('#inside').fadeOut();
    $('#ui').fadeOut();
    //$('#logo').html('Back');
    inside = false;
  });
  
  $('#porthole_right').hover(function() {
    console.log('mouse is in hover');
  }, function() {
    console.log('mouse out');
  });
  
  $('#push_left').hover(function(){
    push_left = true;
  }, function(){
    push_left = false;
  });
  
  $('#push_right').hover(function(){
    push_right = true;
  }, function(){
    push_right = false;
  });
  
});