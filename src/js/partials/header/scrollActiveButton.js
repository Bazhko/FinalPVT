$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 660 && scroll <= 1271) {
        $(".nav-menu__button-text").removeClass("nav-menu__button-text_current");
        $(".nav-menu__button-text_about").addClass("nav-menu__button-text_current");
    } else if (scroll >= 1272 && scroll <= 1920) {
        $(".nav-menu__button-text").removeClass("nav-menu__button-text_current");
        $(".nav-menu__button-text_team").addClass("nav-menu__button-text_current");
    } else if (scroll >= 1921 && scroll <= 2819) {
        $(".nav-menu__button-text").removeClass("nav-menu__button-text_current");
        $(".nav-menu__button-text_work").addClass("nav-menu__button-text_current");
    } else if (scroll >= 2820 && scroll <= 3715) {
        $(".nav-menu__button-text").removeClass("nav-menu__button-text_current");
        $(".nav-menu__button-text_services").addClass("nav-menu__button-text_current");
    } else if (scroll >= 3716 && scroll <= 4447) {
        $(".nav-menu__button-text").removeClass("nav-menu__button-text_current");
        $(".nav-menu__button-text_features").addClass("nav-menu__button-text_current");
    } else if (scroll >= 4448 && scroll <= 5314) {
        $(".nav-menu__button-text").removeClass("nav-menu__button-text_current");
        $(".nav-menu__button-text_contact").addClass("nav-menu__button-text_current");
    } else {
        $(".nav-menu__button-text").removeClass("nav-menu__button-text_current");
        $(".nav-menu__button-text_home").addClass("nav-menu__button-text_current");
    }
});