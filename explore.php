<?php
  $page = 'explore';

  include "header.php";
?>
    <style>
    [draggable] {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    /* Required to make elements draggable in old WebKit */
    -khtml-user-drag: element;
    -webkit-user-drag: element;
    }

    #hidrogeno {
        cursor:move;
        overflow:hidden;
        clear:both;
    }
    </style>

    <div id="contenedor" class="container center-align animated fadeInLeft">
        <h4>Hidrogeniza las estructuras</h4>
    </div>
	<div class="divider"></div>
    <br>
    <div id="chain1" class="container center-align animated fadeInLeft">
		<span><img src="images/explora/p1_cadena.png"></span>
       
		<span class="dobleEnlace" id="d0"><img src="images/explora/p2y6_doble.png"></span>
		
        <span><img src="images/explora/p3y7_cadena.png"></span>
        
		<span class="dobleEnlace" id="d1"><img src="images/explora/p4_doble.png"></span>
		
        <span><img src="images/explora/p5_cadena.png"></span>
		
		<span class="dobleEnlace" id="d2"><img src="images/explora/p2y6_doble.png"></span>
		
		<span><img src="images/explora/p3y7_cadena.png"></span>
		
    </div>
	<br>
    <div id="moleculas" class="container center-align animated fadeInLeft">
        <img id="hidrogeno" draggable="true" src="images/hidrogeno.png">
    </div>
	<br>
	
	<div class="container center-align animated fadeInLeft">
		<div class="card">
			<div class= "card-content center-align">
				<div>
					<img class="responsive-img" id="producto-imagen" src="">
				</div>
				<br>
				<span id="producto-titulo" class="card-title"></span>
				<div class="divider"></div>
				<br>
				<span id="contenido-producto"></span>
			</div>
		</div>
	</div>
	<br>
	<br>
</body>