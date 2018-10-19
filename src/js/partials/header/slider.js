var slideNow = 1;
var slideCount = 0;
var slideInterval = 5000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    setDotActive(1);
    slideCount = $(".welcome-page-slider__slide").children().length;

    $('.welcome-page-slider__nav-button').click(function() {
        navBtnId = $(this).index();
        resetDotStyle();
        $(this).css('background-color', '#FFFFFF');
        if(navBtnId + 1 != slideNow) {
            translateWidth = -$('.welcome-page-slider__wrapper').width() * (navBtnId);
            $('.welcome-page-slider__wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = navBtnId + 1;
        }
    });
    setInterval(function() {
        nextSlide();
    }, slideInterval);
});

function resetDotStyle(){
    $('.welcome-page-slider__nav-button').css('background-color', 'transparent');
}

function nextSlide() {
    if (slideNow >= slideCount || slideNow <= 0) {
        $('.welcome-page-slider__wrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.welcome-page-slider__wrapper').width() * (slideNow);
        $('.welcome-page-slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
    resetDotStyle();
    setDotActive(slideNow);
}

function setDotActive(slideNumber){
    $('.welcome-page-slider__nav-button')[slideNumber-1].style.backgroundColor = "#FFFFFF";
}

function prevSlide() {

    if (slideNow <= 1 || slideNow > slideCount) {
        translateWidth = -$('.welcome-page-slider__wrapper').width() * (slideCount - 1);
        $('.welcome-page-slider').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.welcome-page-slider__wrapper').width() * (slideNow - 2);
        $('.welcome-page-slider').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
    resetDotStyle();
    setDotActive(slideNow);
}