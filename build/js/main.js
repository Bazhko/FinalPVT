document.querySelector('.work__button').addEventListener('click', function () {
    var workWrapper = document.querySelector('.work');
    var gallery = document.querySelector('.work__gallery-wrapper');

    if(workWrapper.style.height === '1490px') {
        workWrapper.style.height = '899px';
        this.innerText = 'show me more';
        gallery.style.height = '560px'
    } else {
        workWrapper.style.height = '1490px';
        this.innerText = 'show less';
        gallery.style.height = '1150px'
    }
}, false);
$('.nav-menu__button-text').click(function (event) {
    $('.nav-menu__button-text').removeClass('nav-menu__button-text_current');
    $(this).addClass('nav-menu__button-text_current');
});
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
$(function (){
    $('.welcome-page-slide__button_video').click(function(event) {
        $('body').append('<div class="modal-overlay"></div><div class="magnify-video"><iframe width="1903" height="810" src="https://www.youtube.com/embed/8Z1eMy2FoX4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><div class="close-popup"><i></i></div></div>');
        $('.magnify-video').css({
            left: ($(document).width() - $('.magnify-video').outerWidth())/2,
            top: ($(window).height() - $('.magnify-video').outerHeight())/2
        });
        $('.modal-overlay, .magnify-video').fadeIn('fast');
    });

    $('body').on('click', '.close-popup, .modal-overlay', function(event) {
        event.preventDefault();

        $('.modal-overlay, .magnify-video').fadeOut('fast', function() {
            $('.close-popup, .magnify-video, .modal-overlay').remove();
        });
    });
});

$(function (){
    $('.welcome-page-slide__button_article').click(function(event) {
        $('body').append('<div class="modal-overlay"></div><div class="magnify-article"><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. Phasellus sollicitudin ante eros ornare, sit amet luctus lorem semper. Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum</div><div class="close-popup"><i></i></div></div>');
        $('.magnify-article').css({
            left: ($(document).width() - $('.magnify-article').outerWidth())/2,
            top: ($(window).height() - $('.magnify-article').outerHeight())/2
        });
        $('.modal-overlay, .magnify-article').fadeIn('fast');
    });

    $('body').on('click', '.close-popup, .modal-overlay', function(event) {
        event.preventDefault();

        $('.modal-overlay, .magnify-article').fadeOut('fast', function() {
            $('.close-popup, .magnify-article, .modal-overlay').remove();
        });
    });
});
function saveDataForm() {
    var userName = document.getElementsByClassName('contact-form__input_name')[0].value;
    var userEmail = document.getElementsByClassName('contact-form__input_email')[0].value;
    var userMessage = document.getElementsByClassName('contact-form__input_message')[0].value;

    if (userName === '') {
        alert('Введите имя');
    } else if (userEmail === '') {
        alert('Введите email');
    } else if (userMessage === '') {
        alert('Введите сообщение');
    } else {
        localStorage.setItem('formUserName', userName);
        localStorage.setItem('formUserEmail', userEmail);
        localStorage.setItem('formUserMessage', userMessage);
    }};
$(function(){
    $('.work-gallery__photo').click(function(event) {
        var i_path = $('.minimized').attr('src');
        $('body').append('<div class="modal-overlay"></div><div class="magnify-picture"><img src="'+i_path+'"><div class="close-popup"><i></i></div></div>');
        $('.magnify-picture').css({
            left: ($(document).width() - $('.magnify-picture').outerWidth())/2,
            top: ($(window).height() - $('.magnify-picture').outerHeight())/2
        });
        $('.modal-overlay, .magnify-picture').fadeIn('fast');
    });

    $('body').on('click', '.close-popup, .modal-overlay', function(event) {
        event.preventDefault();

        $('.modal-overlay, .magnify-picture').fadeOut('fast', function() {
            $('.close-popup, .magnify-picture, .modal-overlay').remove();
        });
    });
});
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
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});