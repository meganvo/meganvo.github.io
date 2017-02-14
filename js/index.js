

// Show vendor profile
$(document).ready(function() {
		$(".prototype").click(function() {
			$(".vendor_profile").toggle();
		});
	});

//Back to Top
    var amountScrolled = 150;
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
