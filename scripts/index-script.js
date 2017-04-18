$(document).ready(function(){
    //esto se puede refactorizar, despues intento hacerlo
    // Transition to learn view
    $("#learnBtn").on('click', function() {
        $("#learnBtn").addClass('animated fadeOutRight');
        $(".row").fadeOut('slow', function(){
            window.location.replace("learn.php")
        });
    });
    
    // Transition to explore view
    $("#exploreBtn").on('click', function() {
        $("#exploreBtn").addClass('animated fadeOutRight');
        $(".row").fadeOut('slow', function(){
            window.location.replace("explore.php")
        });
    });
    
    // Transition to evaluate view
    $("#evaluateBtn").on('click', function() {
        $("#evaluateBtn").addClass('animated fadeOutRight');
        $(".row").fadeOut('slow', function(){
            window.location.replace("evaluate.php")
        });
    }); 
});