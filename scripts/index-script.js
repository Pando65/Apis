$(document).on('ready', function(){
    // Transition to learn view
    $("#learnBtn").on('click', function() {
        $("#learnBtn").addClass('fadeOutRight');
        $(".row").fadeOut('slow', function(){
            window.location.replace("learn.html")
        });
    });
});