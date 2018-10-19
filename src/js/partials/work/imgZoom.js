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