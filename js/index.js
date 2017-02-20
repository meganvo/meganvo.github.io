

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

//Jump to
$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });
}

//Jump to Profile
$('.about').click(function (event) {
  event.preventDefault();
  $('.about-section').scrollView();
});

$('.work').click(function (event) {
  event.preventDefault();
  $('.nav_work').scrollView();
});

//Jump to RigUp Case Study

$('.ru_process').click(function (event) {
  event.preventDefault();
  $('#process').scrollView();
});

$('.ru_analysis').click(function (event) {
  event.preventDefault();
  $('#comparison').scrollView();
});

$('.ru_pattern').click(function (event) {
  event.preventDefault();
  $('#pattern_library').scrollView();
});

$('.ru_branding').click(function (event) {
  event.preventDefault();
  $('#marketing').scrollView();
});


