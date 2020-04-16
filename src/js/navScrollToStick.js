function navScrollToStick() {
    var navFromTop = $('nav').offset().top;
    $(window).scroll(function() {
        scrollValue = $(document).scrollTop();

        if (scrollValue <= navFromTop) {
            $('nav').css({
                'position': 'static'
            })
        } else {
            $('nav').css({
                'position': 'fixed'
            })
        }

    });
};