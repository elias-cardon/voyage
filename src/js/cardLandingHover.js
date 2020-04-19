function cardLandingHover() {
    $('.card-landing.two').click(function(event) {
        $('.card-landing.one').css({ 'transform': 'translate(-33vw)' });
        $('.card-landing.two').css({ 'transform': 'none' });
        $('.card-landing.three').css({ 'transform': 'translate(33vw)' });
        event.stopPropagation();
    });
    $('.card-landing.three').click(function(event) {

        $('.card-landing.one').css({ 'transform': 'translate(-33vw)' });
        $('.card-landing.two').css({ 'transform': 'translate(33vw)' });
        $('.card-landing.three').css({ 'transform': 'translate(0)' });
        event.stopPropagation();
    });
    $('.card-landing.one').click(function(event) {

        $('.card-landing.one').css({ 'transform': 'translate(0)' });
        $('.card-landing.two').css({ 'transform': 'translate(33vw)' });
        $('.card-landing.three').css({ 'transform': 'translate(-33vw)' });
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