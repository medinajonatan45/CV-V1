$(document).ready(function(){
    // El evento para activar sera un click sobre el documento
    $('#title_animate, #Caja_1').hover(function(){
        
        // El objeto y el evento animate
        $('#Caja_1').animate({
            width:'75%'
        },1200);

    });
});
