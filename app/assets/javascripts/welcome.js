// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {    
  var inside = true;
  
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
});