
/*eslint-env jquery*/
/* eslint-env browser */

$(document).ready(function() {
    
    $('.js-section-myCreations').waypoint(function(direction){
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
    }
    }, {
        offset: '25%;'
    });
    
});