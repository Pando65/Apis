// NodeList imagenes
var imgsNodeList;
// Arreglo de imagenes
var spanImgsArr;
// Arreglo de booleanos que indica si tiene doble enlace la imagen
var dobleEnlace;

function transparencia() {
	
	// Pinta de verde todos los que no esten activos
	for (i=0; i<spanImgsArr.length; i++) {
		// Obtiene el valor del box-shadow de las imagenes
		var boxShadowImg = $('img', spanImgsArr[i]).css("box-shadow");

		// Sombrea de verde solamente los NO Activos
		if (boxShadowImg != "rgba(0, 140, 186, 0.498039) 0px 0px 4px 2px" && boxShadowImg != "rgba(0, 140, 186, 0.5) 0px 0px 4px 2px" ) {
			$('img', spanImgsArr[i]).css('box-shadow', '0px 0px 4px 3px rgba(144,214,128,1)');
		}
	}
}

function handleDragEnter(e) {
    $('img', this).css('border', '2px dashed #000');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    return false;
}

function handleDragLeave(e) {
    $('img', this).css('border', '0px dashed #000');
}

function handleDragEnd() {
   
	for (i=0; i<spanImgsArr.length; i++) {
		
		// Obtiene el valor del box-shadow de las imagenes
		var boxShadowImg = $('img', spanImgsArr[i]).css("box-shadow");

		// Elimina el borde verde de todos los que no esten activos
		if (boxShadowImg != "rgba(0, 140, 186, 0.498039) 0px 0px 4px 2px" && boxShadowImg != "rgba(0, 140, 186, 0.5) 0px 0px 4px 2px" ) {
			$('img', spanImgsArr[i]).css({'box-shadow' : 'none'});
		}
	}
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

	$("#chain1 img").css({'box-shadow' : 'none'}); // Quita el sombreado de todos los demas, en caso de querer tener varios activos comentar esta linea
	$('img', this).css('box-shadow', '0px 0px 4px 2px rgba(0, 140, 186, 0.5)'); // Sombreado azul
    $('img', this).css('border', '0px dashed #000');
	
	var idSpanImg = $(this).attr('id');
	var indexSpanImg = idSpanImg.split('c')[1]; // Obtiene el numero del id que es el index
	
	// Switch de valores booleanos de 
	dobleEnlace[indexSpanImg] = !(dobleEnlace[indexSpanImg]);
	
    return false;
}

$(document).ready( function(){
    $("#moleculas").on('dragstart', transparencia);
    
    //  Obtiene las imagenes
    imgsNodeList = document.getElementsByClassName( "carbonos" );
    // Crea arreglo de imagenes
    spanImgsArr = jQuery.makeArray(imgsNodeList);
    // Arreglo de booleanos que indica si tiene doble enlace la imagen
    dobleEnlace = [false,false,true,true];
	
	// Agrega listeners a cada span de las imagenes
	for (i=0; i < spanImgsArr.length; i++) {
		$(spanImgsArr[i]).on('dragenter', handleDragEnter);
		$(spanImgsArr[i]).on('dragover', handleDragOver);
		$(spanImgsArr[i]).on('dragleave', handleDragLeave);
		$(spanImgsArr[i]).on('drop', handleDrop);
	}
	
	$("#moleculas").on('dragend', handleDragEnd);
  
});