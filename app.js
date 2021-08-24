var modal = document.querySelector('.modal');
var modalOverLay = document.querySelector('.modal__overlay');
var login = document.querySelector('.auth-form-login');
var register = document.querySelector('.auth-form-register');

function showLogin() {
    modal.classList.remove('modal--no-active');
    login.style.display = 'block';
    modalOverLay.onclick = function () {
        modal.classList.add('modal--no-active');
        login.style.display = 'none';
    }
}

function showRegister() {
    modal.classList.remove('modal--no-active');
    register.style.display = 'block';
    modalOverLay.onclick = function () {
        modal.classList.add('modal--no-active');
        register.style.display = 'none';
    }
}