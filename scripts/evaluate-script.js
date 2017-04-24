$(document).ready(function() {
    
    var qArray;
    var i = 0, correctAns = 0, increment = 0, progressBar = 0, parche = 0;
    $("#over").hide();
    
    function putQuestion() {
        var currentHTML = "";
        $(".card-title").html(qArray[i].question_text);
        for(var c = 0; c < qArray[i].ans.length ; c += 1) {
            currentHTML += "<div class='row'>";
                currentHTML += "<div class='card col s12 hoverable center-block' id='" + qArray[i].ans[c].id + "'>";
                    if (qArray[i].ans[c].answer_img != null) {
                        currentHTML += "<div class='card-image center-block'>"
                            currentHTML += "<img class='fierro' src='images/" + qArray[i].ans[c].answer_img + "'/>";
                        currentHTML += "</div>";
                    }
                    currentHTML += "<div class='card-content center-block'>"
                        if (qArray[i].ans[c].answer_text != null)
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
            increment = Math.ceil(100.0 / qArray.length);
        },
        error: function (data) {
            alert("up");
        }
    });
    
    // Clicked an answer
    $("#answers").on("click", ".hoverable", function(){
        if (checkIfCorrect($(this).attr("id"))) {
            correctAns += 1;
			swal("¡Buen trabajo!", "¡Escogiste la respuesta correcta!", "success")
        }
        else {
            swal("Oops...", "Respuesta incorrecta :(", "error");
        }
        
        if (i < qArray.length) {
            // There are questions left
            
            // Este metodo se ejecuta 2 veces y deberia ser una vez
            $("#question").addClass('animated fadeOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                if (parche % 2 == 0) { 
                    putQuestion();
                    var $this = $("#question");
                    $this.removeClass('animated fadeOutRight');
                    $("#question").addClass('animated fadeInLeft'); //creo que es porque al finalizar esta animacion tambien se ejecuta el callback
                }
                parche += 1; //por eso ocupo esta variable, para que solo se ejecute las veces pares
            });
        }
        else {
            // we finished the quiz
            var message = " respuestas correctas de ";
            if (correctAns == 1)
                message = " respuesta correcta de "
            $("#question").addClass('animated fadeOutRight');
            $("#question").hide();
            $("#score").html(correctAns + message + qArray.length + " totales");
            $("#over").show();
            $("#over").addClass('animated fadeInLeft');
        }
        
        // Increasing progress bar
        progressBar += increment;
        $(".determinate").css("width", progressBar + "%");        
    });
});