

$(document).ready(function () {
    
    $('#toggle-view li').click(function () {

        var text = $(this).children('div.panel');

        if (text.is(':hidden')) {
            text.slideDown(50);
            $(this).children('span').html('-');     
        } else {
            text.slideUp(50);
            $(this).children('span').html('+');     
        }
        
    });


    $('.gun_choice').click(function(){
        $('.caption').text('Wrong - you can open carry this gun');

        });

});