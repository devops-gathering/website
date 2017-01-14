$(document).ready(function(){
	$('.accordion .acc-container').each(function(){
		$(this).click(function(){
			$('.acc-container').removeClass('active').children('.acc-content').slideUp();
			$(this).children('.acc-content').slideToggle();
			$(this).addClass('active');
		});
	});
});

