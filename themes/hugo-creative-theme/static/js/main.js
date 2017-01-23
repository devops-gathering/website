$(document).ready(function(){
	
	// Workshop and Program accordion
	$('.accordion .acc-container').each(function(){
		$(this).click(function(){
			if($(this).hasClass('active')) {
				$(this).toggleClass('active');
			}
			$(this).children('.acc-content').slideToggle();
			$('.acc-container h3').children('.acc-content').slideUp();
		});
	});

	// Add and clone navigation for resposive view
	$('body').append('<div class="navigation-overlay"></div>');
	$('.navigation').clone().prependTo('.navigation-overlay');
	$('.social-media').clone().appendTo('.navigation-overlay');

	$('.burger').click(function(){
		$('.navigation-overlay').toggleClass('open');
	});
	
	// Scroll To (anchor)
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top - $('.navigation-container').outerHeight()
		}, 1000);
		$('.navigation-overlay').removeClass('open');
		return false;
	});	
});