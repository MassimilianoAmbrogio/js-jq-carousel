/**
 *  Slider di immagini
 */

// Parte JS e jQuery

// Frecce per scorrere le img con click mouse
$(document).ready(function () {
    
    $('.next').click(function () {
        nextPrevImage('next');
    });
    
    $('.prev').click(function () {
        nextPrevImage('prev');
    });

    // Navigation with keyboard
    $(document).keydown(function(event) {
        
         console.log(event.keyCode);

        if (event.KeyCode == 37) {
            // Sx
            nextPrevImage('prev');
         } else if (event.KeyCode == 39) {
            // Dx
            nextPrevImage('next');
         }
        
    });
   
}); // <-- End doc ready


// Naviga avanti o indietro nelle slide
function nextPrevImage(direction) {
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    // Reset
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    // Next
    if (direction === 'next') {

        if (activeImage.hasClass('last') === true) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
        
    }

    // Prev 
     else if (direction === 'prev') {

        if (activeImage.hasClass('first') === true) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
        
    }
}