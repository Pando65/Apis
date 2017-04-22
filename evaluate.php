<?php
$page = 'evaluate';

include "header.php";
?>
    
    <div class="container center-align animated fadeInLeft">
        <div class="card" id ="question">
            <div class="card-content">
                <div class="card-image"></div>
                <span class="card-title">¿Qué son los acidos grasos?</span>
                <div class="divider"></div>
                <br>
                <div id="answers"></div>             
            </div>
        </div>
        
        <div id="over" class="">
            <h3>¡Has terminado!</h3> <br>
            <h4>Tu puntaje: <span id="score"></span></h4> <br>
            <h4>¡Sigue practicando!</h4>
        </div>
    </div>
    
</body>