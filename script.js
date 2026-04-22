const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
}
