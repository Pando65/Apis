// NodeList imagenes
var imgsNodeList;
// Arreglo de imagenes
var spanImgsArr;
// Arreglo de booleanos que indica si tiene doble enlace la imagen
var dobleEnlace;

function transparencia() {
	
	// Pinta de verde todos los que no esten activos
	for (i=0; i < spanImgsArr.length; i++) {
		// Obtiene el valor del box-shadow de las imagenes
		var boxShadowImg = $('img', spanImgsArr[i]).css("box-shadow");

		// Sombrea de verde solamente los NO Activos
		if (boxShadowImg != "rgba(0, 140, 186, 0.498039) 0px 0px 4px 2px" && boxShadowImg != "rgba(0, 140, 186, 0.5) 0px 0px 4px 2px" ) {
			$('img', spanImgsArr[i]).css('box-shadow', '0px 0px 4px 3px rgba(144,214,128,1)');
		}
	}
}

function handleDragEnter(e) {
	// Agrega delineado sobre solamente los SI activos
	console.log($('img', this).css("box-shadow"));
	console.log(" - ");
	if ($('img', this).css("box-shadow") != "rgba(0, 140, 186, 0.498039) 0px 0px 4px 2px" && $('img', this).css("box-shadow") != "rgba(0, 140, 186, 0.5) 0px 0px 4px 2px") {
    	$('img', this).css('border', '2px dashed #000');
	}
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
   
	for (i=0; i < spanImgsArr.length; i++) {
		
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

	var boxShadowImg = $('img', this).css("box-shadow");
	
	if (boxShadowImg != "rgba(0, 140, 186, 0.498039) 0px 0px 4px 2px" && boxShadowImg != "rgba(0, 140, 186, 0.5) 0px 0px 4px 2px" ) {

		$('img', this).css('box-shadow', '0px 0px 4px 2px rgba(0, 140, 186, 0.5)'); // Sombreado azul
		$('img', this).css('border', '0px dashed #000');

		var idSpanImg = $(this).attr('id');
		var indexSpanImg = idSpanImg.split('d')[1]; // Obtiene el numero del id que es el index

		// Switch de valores booleanos de 
		dobleEnlace[indexSpanImg] = !(dobleEnlace[indexSpanImg]);

		var boxShadowImg = $('img', this).css("box-shadow");

		cambiaImagenEnlace($(this));

		// Carga las imagenes de ejemplo y el contenido del texto
		cargaImagenEjemplo();

	}
	return false;
}

// Cambia de enlace doble a simple y viceversa.
function cambiaImagenEnlace(enlace){
	enlace = $('img', enlace);
	var nombre_imagen = enlace.attr('src').split('/')[2] // Obtiene nombre original de la imagen
	
	nombre_imagen = nombre_imagen.split('_'); // Obtiene arreglo haciendo split del _
	
	var nombre = nombre_imagen[0];
	var doble = nombre_imagen[1]; // Recorta parte de su nombre original, ejemplo = doble.png o cadena.png (simple)
	
	if (nombre == 'p2y6') {
		if (doble == 'doble.png') {
			enlace.attr('src', 'images/explora/p2y6_cadena.png');
		}
		else if (doble == 'cadena.png') {
			enlace.attr('src', 'images/explora/p2y6_doble.png');
		}
	}
	else if (nombre == 'p4'){
		if (doble == 'doble.png') {
			enlace.attr('src', 'images/explora/p4_cadena.png');
		}
		else if (doble == 'cadena.png') {
			enlace.attr('src', 'images/explora/p4_doble.png');
		}
	}
	
	
	
}

// Carga imagen y contenido de acuerdo a los enlaces dobles encontrados
function cargaImagenEjemplo(){
	if (dobleEnlace[0]) {
		if (dobleEnlace[1]){
			if (dobleEnlace[2]) { // Enlace doble en 9,12 y 15
				$('#producto-imagen').attr('src', 'images/explora/chia.png');
				$('#producto-titulo').text("Ácido 9, 12, 15 - linolénico");
				$('#contenido-producto').text("El ácido α-linolénico se encuentra en abundancia en las semillas de chía");
			}
			else { // Enlace doble en 9 y 12
				$('#producto-imagen').attr('src', 'images/explora/linaza.png');
				$('#producto-titulo').text("Ácido 9, 12 -  linoleico");
				$('#contenido-producto').text("El ácido linoleico un ácido graso esencial de la serie omega 6 (ω-6), es decir, el organismo no puede crearlo y tiene que ser adquirido a través de la dieta. Este se puede encontrar en la semilla de la linaza.");
			}
		}
		else { 
			if (dobleEnlace[2]) { // Enlace doble en 9 y 15
				$('#producto-imagen').attr('src', 'images/explora/nocomercial.png');
				$('#producto-titulo').text("Ácido 9, 15 -octadecadienoico");
				$('#contenido-producto').text("No es muy común, no tiene usos comerciales conocidos.");

			}
			else {// Enlace doble en 9
				$('#producto-imagen').attr('src', 'images/explora/aceite_oliva.png');
				$('#producto-titulo').text("Ácido 9 - Oleico");
				$('#contenido-producto').text("El ácido oleico es un ácido graso monoinsaturado de la serie omega 9 típico de los aceites vegetales como el aceite de oliva, cártamo, aguacate, etc.");
			}
		}
	}
	else if (dobleEnlace[1]){
		if (dobleEnlace[2]) { // Enlace doble en 12 y 15
			$('#producto-imagen').attr('src', 'images/explora/nocomercial.png');
			$('#producto-titulo').text("Ácido 12, 15 -octadecadienoico");
			$('#contenido-producto').text("No es muy común, no tiene usos comerciales conocidos.");
		}
		else { // Enlace doble en 12
			$('#producto-imagen').attr('src', 'images/explora/lubricante.png');
				$('#producto-titulo').text("Ácido 12 -octadecadienoico");
				$('#contenido-producto').text("El ácido 12 hidroxiesteárico (12 HSA) es un material que se caracteriza por la presencia de dos grupos funcionales reactivos, los cuales permiten generar un gran número de derivados químicos para diversas aplicaciones. El uso más importante que se le puede atribuir al 12 HSA es el emplearlo en la fabricación de grasas lubricantes");
		}
		
	}
	else if (dobleEnlace[2]) { // Enlace doble en 15
	 	$('#producto-imagen').attr('src', 'images/explora/nocomercial.png');
		$('#producto-titulo').text("Ácido 15 -octadecadienoico");
		$('#contenido-producto').text("No es muy común, no tiene usos comerciales conocidos.");
 	}
	else{ // Ningun enlace doble
		$('#producto-imagen').attr('src', 'images/explora/jabon.png');
		$('#producto-titulo').text("Ácido esteárico");
		$('#contenido-producto').text("El ácido esteárico es un ácido graso saturado de 18 átomos de carbono presente en aceites y grasas animales y vegetales. Es muy usado en la fabricación de velas, jabones y cosméticos.");
	}
}

$(document).ready( function(){
    $("#hidrogeno").on('dragstart', transparencia);
    
    //  Obtiene las imagenes
    imgsNodeList = document.getElementsByClassName( "dobleEnlace" );
    // Crea arreglo de imagenes
    spanImgsArr = jQuery.makeArray(imgsNodeList);
    // Arreglo de booleanos que indica si tiene doble enlace la imagen
    dobleEnlace = [true,true,true];
	
	// Agrega listeners a cada span de las imagenes
	for (i=0; i < spanImgsArr.length; i++) {
		$(spanImgsArr[i]).on('dragenter', handleDragEnter);
		$(spanImgsArr[i]).on('dragover', handleDragOver);
		$(spanImgsArr[i]).on('dragleave', handleDragLeave);
		$(spanImgsArr[i]).on('drop', handleDrop);
		$(spanImgsArr[i]).hover(function() {
			var boxShadowImg = $('img', this).css("box-shadow");
			// Verifica si es uno activo (Azul)
			if (boxShadowImg == "rgba(0, 140, 186, 0.498039) 0px 0px 4px 2px" || boxShadowImg == "rgba(0, 140, 186, 0.5) 0px 0px 4px 2px" ) {
				$(this).css("cursor", "pointer");
			}
		});
		
	}
	
	$("#d0, #d1, #d2").on('click', function(){
		var boxShadowImg = $('img', this).css("box-shadow");
		
		if (boxShadowImg == "rgba(0, 140, 186, 0.498039) 0px 0px 4px 2px" || boxShadowImg == "rgba(0, 140, 186, 0.5) 0px 0px 4px 2px" ) {
				cambiaImagenEnlace($(this));
			
				var idSpanImg = $(this).attr('id');
				var indexSpanImg = idSpanImg.split('d')[1]; // Obtiene el numero del id que es el index
				dobleEnlace[indexSpanImg] = !(dobleEnlace[indexSpanImg]);
				cargaImagenEjemplo();
				$('img', this).css({'box-shadow' : 'none'});
				$(this).css("cursor", "auto");
		}
	});
	
	
	
	$("#hidrogeno").on('dragend', handleDragEnd);
	
	// Inicializa la imagen
	cargaImagenEjemplo();
});