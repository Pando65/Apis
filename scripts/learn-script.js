$(document).ready(function() {
    
    $("#nav-mobile").on('click', function() {
        $("#contenedor ul").addClass('fadeOutRight'); //not working, we need to change the page after this, with a callback
    });
});