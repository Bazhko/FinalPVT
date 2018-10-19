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