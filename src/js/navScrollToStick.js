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
            $('nav').css({
                'background-color': 'unset'
            });
            if ($('nav').find('img#plane_icon_header').length > 0) {
                $('nav').find('img#plane_icon_header').attr('src', '../src/img/icons/plane_light.png');
            } else {
                $('nav').find('img#plane_icon_header_landing').attr('src', 'src/img/icons/plane_light.png');
            };

        } else {
            $('nav').css({
                'position': 'fixed',
                'top': '0',
                'bottom': 'unset'
            });

            $('nav').css({
                'background-color': 'var(--regent-saint-blue)'
            });

            if ($('nav').find('img#plane_icon_header').length > 0) {
                $('nav').find('img#plane_icon_header').attr('src', '../src/img/icons/plane.png');
            } else {
                $('nav').find('img#plane_icon_header_landing').attr('src', 'src/img/icons/plane.png');
            };

            $('div.dropup').addClass('d-none');
            $('div.dropdown').removeClass('d-none');

        };

    });
};