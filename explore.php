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
    <div id="contenedor" draggable="true" class="container center-align animated fadeInLeft">
        <h2>Hidrogeniza las estructuras</h2>
    </div>
    <div id="chain1" class="container center-align animated fadeInLeft">
        <span><img src="images/hidrogenado1.png"></span>
        <span><img src="images/hidrogenado2.png"></span>
        <span><img src="images/sinhidrogenar1.png"></span>
        <span><img src="images/sinhidrogenar2.png"></span>
    </div>
    <div id="moleculas" class="left-align animated fadeInLeft" draggable="true">
        <span id="atomos"><img id="hidrogeno" src="images/hidrogeno.png" style="width: 15%; height: 20%"></span>
    </div>
</body>