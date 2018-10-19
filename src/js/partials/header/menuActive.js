$('.nav-menu__button-text').click(function (event) {
    $('.nav-menu__button-text').removeClass('nav-menu__button-text_current');
    $(this).addClass('nav-menu__button-text_current');
});