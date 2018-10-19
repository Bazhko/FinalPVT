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