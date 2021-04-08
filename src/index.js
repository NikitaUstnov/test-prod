import './main.less';
const menu = document.querySelector('.header__nav--wrapper');
const menuBtn = document.querySelector('.header__open-menu');
const menuBtnClose = document.querySelector('.header__close-menu');

menuBtn.addEventListener('click', open);

function open() {
  menu.classList.add('is-visible');
}

menuBtnClose.addEventListener('click', close);
function close() {
  menu.classList.remove('is-visible');
}
