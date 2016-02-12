

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
        $('.gun_choice1 .caption').text('WRONG! YOU CAN CARRY THIS OPENLY!');

        });
     $('.gun_choice2').click(function(){
        $('.gun_choice2 .caption').text('INCORRECT!');

        });
      $('.gun_choice3').click(function(){
        $('.gun_choice3 .caption').text('WRONG!');

        });
       $('.gun_choice4').click(function(){
        $('.gun_choice4 .caption').text('NO! YOU CAN CARRY THIS OPENLY!');
        });
});