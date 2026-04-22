const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.mobile-btn-open');
const menuBtnClose = document.querySelector('.mobile-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
