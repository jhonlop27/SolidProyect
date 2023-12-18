const wrapper = document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-Link');
const btnPopup = document.querySelector('.BotonLogin-Popup');
const iconclose = document.querySelector('.Icono-cerrar');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});