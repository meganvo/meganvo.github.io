

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

//Pretty sure this is not efficient
    $('.gun_choice1').click(function(){
        $('.gun_choice1 .caption').text('Semi-automatic rifles are chill.')
        .addClass('gun_choice_select');
        });

     $('.gun_choice2').click(function(){
        $('.gun_choice2 .caption').text('Pistols are allowed.')
             .addClass('gun_choice_select');

        });
      $('.gun_choice3').click(function(){
        $('.gun_choice3 .caption').text('Revolvers are fine.')
             .addClass('gun_choice_select');

        });
       $('.gun_choice4').click(function(){
        $('.gun_choice4 .caption').text('Shotguns are pretty sick in public.')
             .addClass('gun_choice_select');
        });


        $('#resources-toggle li').click(function () {

        var text = $(this).children('div.rPanel');

        if (text.is(':hidden')) {
            text.slideDown(50);
            $(this).children('span').html('-');     
        } else {
            text.slideUp(50);
            $(this).children('span').html('+');     
        }
        
    });

});