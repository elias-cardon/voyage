function cardLandingHover() {
    $('.card-landing.two').click(function(event) {
        $('.card-landing.one').css({ 'transform': 'rotate(-120deg)' });
        $('.card-landing.two').css({ 'transform': 'rotate(0deg)' });
        $('.card-landing.three').css({ 'transform': 'rotate(120deg)' });
        event.stopPropagation();
    });
    $('.card-landing.three').click(function(event) {

        $('.card-landing.one').css({ 'transform': 'rotate(-120deg)' });
        $('.card-landing.two').css({ 'transform': 'rotate(120deg)' });
        $('.card-landing.three').css({ 'transform': 'rotate(0deg)' });
        event.stopPropagation();
    });
    $('.card-landing.one').click(function(event) {

        $('.card-landing.one').css({ 'transform': 'rotate(0deg)' });
        $('.card-landing.two').css({ 'transform': 'rotate(120deg)' });
        $('.card-landing.three').css({ 'transform': 'rotate(-120deg)' });
        event.stopPropagation();
    });

    $(document).click(function() {
        $('.card-landing.one').css({ 'transform': 'none' });
        $('.card-landing.two').css({ 'transform': 'none' });
        $('.card-landing.three').css({ 'transform': 'none' });
        $('.card-landing').find('.pushpin').addClass('d-none');
    });

    $('.card-landing').click(function() {
        $('.card-landing').find('.pushpin').addClass('d-none');
        $(this).find('.pushpin').removeClass('d-none');
    });

};