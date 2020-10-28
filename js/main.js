/**
 *  Slider di immagini
 */

// Parte JS e jQuery

// Frecce per scorrere le img 
$(document).ready(function () {
    
    // Click mouse
    $('.next').click(function () {
        nextPrevImage('next');
    });
    
    $('.prev').click(function () {
        nextPrevImage('prev');
    });

    // Navigation with keyboard
    $(document).keydown(function(event) {
        
        // console.log(event.keyCode);

        if (event.keyCode == 37) {
            // Sx
            nextPrevImage('prev');
         } else if (event.keyCode == 39) {
            // Dx
            nextPrevImage('next');
         }
    });

    // Navigation with dots 
    $('.nav i').click(function () {

        // console.log(direction);
        var activeImage = $('.images img.active');
        var activeCircle = $('.nav i.active');

        // Reset actual active
        activeImage.removeClass('active');
        activeCircle.removeClass('active');

        var circle = $(this);

        var index = circle.index();
        console.log(index);

        circle.addClass('active');

        // Set img by index
        $('.images img').eq(index).addClass('active');
    });
   
}); // <-- End doc ready

/************************
 * Functions
 ***********************/

// Naviga avanti o indietro nelle slide
function nextPrevImage(direction) {
    
    // console.log(direction);
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    // Reset actual active
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