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

	// Show and hide navigation
	$('.burger').click(function(){
		$('.navigation-overlay').toggleClass('open');
	});
});	