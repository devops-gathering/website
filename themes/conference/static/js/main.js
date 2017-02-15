$(document).ready(function () {

    // Workshop and Program accordion
    $('.accordion .acc-container').each(function () {
        $(this).click(function () {
            if ($(this).hasClass('active')) {
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

    $('.burger').click(function () {
        $('.navigation-overlay').toggleClass('open');
    });

    // Scroll To (anchor)
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navigation-container').outerHeight()
        }, 1000);
        $('.navigation-overlay').removeClass('open');
        return false;
    });

    //Scroll on Page load to anchor
    $(window).load(function () {
        // Remove the # from the hash, as different browsers may or may not include it
        var hash = location.hash.replace('#', '');

        if (hash != '') {

            // Clear the hash in the URL
            // location.hash = '';   // delete front "//" if you want to change the address bar
            $('html, body').animate({
                scrollTop: $(location.hash).offset().top - $('.navigation-container').outerHeight()
            }, 1000);

        }
    });


});

// show submenu on desktop when viewport is > 960
if ($(window).width() > 960) {
    $('.navigation li').each(function () {
        $(this).hover(function () {
            $(this).children('ul').stop(true).slideToggle(700);
        });
    });
} else {
    $('.navigation li').each(function () {
        $(this).unbind('mouseenter mouseleave')
    });
}
