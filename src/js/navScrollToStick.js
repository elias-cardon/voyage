function navScrollToStick() {
    var navFromTop = $('nav').offset().top;
    $(window).scroll(function() {
        scrollValue = $(document).scrollTop();

        if (scrollValue <= navFromTop) {
            $('nav').css({
                'position': 'absolute',
                'bottom': '0',
                'top': 'unset'
            });
            $('div.dropup').removeClass('d-none');
            $('div.dropdown').addClass('d-none');


        } else {
            $('nav').css({
                'position': 'fixed',
                'top': '0',
                'bottom': 'unset'
            });

            $('div.dropup').addClass('d-none');
            $('div.dropdown').removeClass('d-none');

        }

    });
};