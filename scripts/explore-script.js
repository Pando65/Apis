/*window.ondragstart = function () { console.log("bofo1"); $("h2").text("hola"); 
document.getElementsByTagName('h2').innerHTML = "hola"; console.log("bofo");  };

function transparencia(e) {
    $("#chain1 img").css('box-shadow', '0px 0px 5px 1px rgba(0, 140, 186, 0.5)');
    console.log("bofote");
}
*/
$(document).ready( function(){
alert("ohola");
    $("#moleculas").on('dragstart', transparencia);
    console.log("bofotisimo");
});
/*$(document).on('ready', function(){
    $("#moleculas").draggable();/*
    $( "#atomos" ).draggable(
        /*drag: function( event, ui ) {
 
        // Keep the left edge of the element
        // at least 100 pixels from the container
        ui.position.left = Math.min( 100, ui.position.left );
        }*/
 /*   );

    $( "#atomos" ).on( "dragstart", function() {
        $("#chain1 img").css('box-shadow', '0px 0px 5px 1px rgba(0, 140, 186, 0.5)');
    });*/
/*
function handleDragStart(e) {
  console.log("bofo");
  //$("#atomos").fadeOut('slow', function(){});  // this / e.target is the source node.
}

    document.getElementsByTagName("img").addEventListener('mouseover', handleDragStart, false);
*/