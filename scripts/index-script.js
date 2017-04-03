$(document).on('ready', function(){
    // Transition to learn view
    $("#learnBtn").on('click', function() {
        $("#learnBtn").addClass('fadeOutRight');
        $(".row").fadeOut('slow', function(){
            window.location.replace("learn.html")
        });
    });
    
    // Transition to explore view
    $("#exploreBtn").on('click', function() {
        $("#exploreBtn").addClass('fadeOutRight');
        $(".row").fadeOut('slow', function(){
            window.location.replace("explore.html")
        });
    });
    
    // Transition to evaluate view
    $("#evaluateBtn").on('click', function() {
        $("#evaluateBtn").addClass('fadeOutRight');
        $(".row").fadeOut('slow', function(){
            window.location.replace("evaluate.html")
        });
    });    
    
    
});