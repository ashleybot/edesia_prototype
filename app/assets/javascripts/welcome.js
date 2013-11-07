// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {    
    var portholeContainer = $('#porthole_container');
    var pHeight = portholeContainer.outerHeight();
    console.log(pHeight);
    $('#porthole_container > div').each(function() {

      $(this).css({ height: pHeight + 'px' });

    });
    
    
});