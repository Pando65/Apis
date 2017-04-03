$(document).ready(function() {
    
    $("li").on('click', function() {
        $("li").addClass('fadeOutRight'); //not working, we need to change the page after this, with a callback
    });
});