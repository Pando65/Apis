function transparencia(e) {
    $("#chain1 img").css('box-shadow', '0px 0px 5px 1px rgba(0, 140, 186, 0.5)');
}

function handleDragEnter() {
    $(this).css('border', '2px dashed #000');
}

function handleDragLeave(e) {
    $(this).css('border', '0px dashed #000');
}

function handleDragEnd() {
    $("#chain1 img").css('box-shadow', '0px 0px 0px 0px rgba(0, 140, 186, 0.5)');
}

function handleDrop(e) {
    $(this).preventDefault();
    $(this).stopPropagation();
    $("#moleculas").css('border', '2px dashed #000');
    console.log("bofote");
    $(this).css('border', '10px dashed #000');
}

$(document).ready( function(){
    $("#moleculas").on('dragstart', transparencia);
    $("#chain1 img").on('dragenter', handleDragEnter);
    $("#chain1 img").on('dragleave', handleDragLeave);
    $("#chain1 img").on('drop', handleDrop);
    $("#moleculas").on('dragend', handleDragEnd);
});