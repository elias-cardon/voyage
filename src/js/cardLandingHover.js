function cardLandingHover() {
    $('.card-landing').mouseenter(function() {
        $('.card-landing.zero').css({ 'transform': 'rotate(30deg)' });
        $('.card-landing.one').css({ 'transform': 'rotate(-30deg)' });
        $('.card-landing.two').css({ 'transform': 'rotate(-60deg)' });
        $('.card-landing.three').css({ 'transform': 'rotate(-100deg)' });
        $('.card-landing.four').css({ 'transform': 'rotate(-120deg)' });
    });
    $('.card-landing').mouseleave(function() {
        $('.card-landing.zero').css({ 'transform': 'none' });
        $('.card-landing.one').css({ 'transform': 'none' });
        $('.card-landing.two').css({ 'transform': 'none' });
        $('.card-landing.three').css({ 'transform': 'none' });
        $('.card-landing.four').css({ 'transform': 'none' });
    });
}