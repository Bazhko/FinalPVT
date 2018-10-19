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
