$(document).ready(function() {
    
    var qArray;
    var i = 0, correctAns = 0;
    $("#over").hide();
    
    function putQuestion() {
        var currentHTML = "";
        $(".card-title").html(qArray[i].question_text);
        for(var c = 0; c < qArray[i].ans.length ; c += 1) {
            currentHTML += "<div class='row'>";
                currentHTML += "<div class='card col s12 hoverable' id='" + qArray[i].ans[c].id + "'>";
                    currentHTML += "<div class='card-image'></div>";
                    currentHTML += "<div class='card-content'>"
                        currentHTML += qArray[i].ans[c].answer_text;
                    currentHTML += "</div>";
                currentHTML += "</div>";
            currentHTML += "</div>";
        }
        $("#answers").html(currentHTML);
        i += 1;
    }
    
    function checkIfCorrect(id) {
        for(var c = 0; c < qArray[i-1].ans.length; c += 1) {
            if (qArray[i-1].ans[c].correct == '1' && qArray[i-1].ans[c].id == id)
                return true;
        }
        return false;
    }
    
    // initialize array of questions
    $.ajax({
        type: "POST",
        url: './services/applicationLayer.php',
        dataType: 'json',
        data: {"action": "GET-QUESTIONS"},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        success: function (data) {
            qArray = data.response;
            putQuestion();
        },
        error: function (data) {
            alert("up");
        }
    });
    
    // Clicked an answer
    $("#answers").on("click", ".hoverable", function(){
        var message = "Incorrecto :(";
        if (checkIfCorrect($(this).attr("id"))) {
            correctAns += 1;
            message = "Correcto!";
        }
        alert(message);
        
        if (i < qArray.length) {
            putQuestion();
        }
        else {
            var message = " respuestas correctas de ";
            if (correctAns == 1)
                message = " respuesta correcta de "
            $("#question").addClass('animated fadeOutRight');
            $("#question").hide();
            $("#score").html(correctAns + message + qArray.length + " totales");
            $("#over").show();
            $("#over").addClass('animated fadeInLeft');
        }
    });
});