$(document).ready(function() {
    
    // initialize array of questions
    $.ajax({
        type: "POST",
        url: './services/applicationLayer.php',
        dataType: 'json',
        data: {"action": "GET-QUESTIONS"},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        success: function (data) {
            alert("ok");
        },
        error: function (data) {
            alert("up");
        }
    });    
});