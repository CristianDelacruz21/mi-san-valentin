$(document).ready(function() {
    var isEntering = false, // Create flags
        isLeaving = false;
    $('.container').mouseenter(function() {
        isEntering = true; // Set enter flag
        if (isLeaving) {   // Check, if leaving is on process
            $(this).finish(); // If leaving, finish it
            isLeaving = false; // Reset leaving flag
        }
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    });
    $('.container').mouseleave(function() {
        isLeaving = true; // Set leave flag
        if (isEntering) { // Check if entering is on process
            $(this).finish(); // If it is, finish it
            isEntering = false; // Reset enter flag
        }
        $('.card').stop().animate({
            top : 0
        }, 'slow');
    });
});
