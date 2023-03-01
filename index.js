const loginForm = document.querySelector('.loginForm');
const registerForm = document.querySelector('.registerForm');

const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-Link');

registerLink.addEventListener('click', ()=> {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');

})

loginLink.addEventListener('click', ()=> {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
})