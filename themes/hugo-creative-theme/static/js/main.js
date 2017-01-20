$(document).ready(function(){
	
	// Workshop and Program accordion
	$('.accordion .acc-container').each(function(){
		$(this).click(function(){
			$('.acc-container').removeClass('active').children('.acc-content').slideUp();
			$(this).children('.acc-content').slideToggle();
			$(this).addClass('active');
		});
	});

	// Show and hide navigation
	$('.burger').click(function(){
		$('.navigation-overlay').toggleClass('open');
	});
});	