$(document).ready(function() {
    
    // initialize array of questions
    $.ajax({
        type: "POST",
        url: './services/applicationLayer.php',
        dataType: 'json',
        data: {"action": "GET-QUESTIONS"},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        success: function (data) {
            alert(data.response[0].question_text);
            alert(data.response[0].ans[0].id);
        },
        error: function (data) {
            alert("up");
        }
    });    
});