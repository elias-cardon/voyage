function dropdownShowCOntent() {
    $('.dropdown').find('img').click(function() {

        if ($(this).siblings('.dropdown-content-js').css('display') === 'none') {
            $(this).siblings('.dropdown-content-js').css({
                'display': 'flex'
            });
        } else {
            $(this).siblings('.dropdown-content-js').css({
                'display': 'none'
            });
        }
    })
};

function dropupShowCOntent() {
    $('.dropup').find('img').click(function() {

        if ($(this).siblings('.dropup-content-js').css('display') === 'none') {
            $(this).siblings('.dropup-content-js').css({
                'display': 'flex'
            });
        } else {
            $(this).siblings('.dropup-content-js').css({
                'display': 'none'
            });
        }
    })
};