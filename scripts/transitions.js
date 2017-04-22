$(document).ready(function(){
    $("#nav-mobile a, .brand-logo").on('click', function(e) {
        e.preventDefault();
        var new_page = $(this).attr("href");
        $(".container").addClass('animated fadeOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            window.location.replace(new_page);
        });
    });     
});