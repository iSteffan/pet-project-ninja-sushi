import { addDomSushiMarkup, selectHandle } from './js/generate-sushi-cards';
import { openModalLocation } from './js/modal-window-select-location';
import { checkMeditationTime } from './js/page-load-event';
import { loadMoreSushi } from './js/load-more-sushi';
// import { sushi } from './js/sushi-object';
import { addToCart, openCart, openCartMobile } from './js/add-to-cart-sushi';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const refs = {
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  formSushiFilter: document.getElementById('sort-sushi'),
  sushiContainer: document.querySelector('.section-sushi__container'),
  openCartBtn: document.querySelector('.cart-btn'),
  cart: document.querySelector('[data-modal="cart"]'),
  cartMobile: document.querySelector('.menu__cart-btn'),
};

// Події при завантаженні сторінки
document.addEventListener('DOMContentLoaded', firstStartHandle);

function firstStartHandle() {
  checkMeditationTime();
  localStorage.removeItem('pre-order');

  // Створюємо масив в який будемо заносити імена всіх куплених товарів
  let nameArr = [];
  localStorage.setItem('array', JSON.stringify(nameArr));
}

// Вставляємо згенеровану розмітку карток суші в DOM
addDomSushiMarkup();

// Фільтр суші
refs.formSushiFilter.addEventListener('change', selectHandle);

// Додавання товару в корзину
refs.sushiContainer.addEventListener('click', addToCart);

// Відкриття корзини
refs.openCartBtn.addEventListener('click', openCart);
// refs.cartMobile.addEventListener('click', openCart);

// Відкриття модального вікна з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);

// Для мобільної версії: показуємо решту карток з суші по кліку на кнопку load more
loadMoreSushi();

// const mobileMenu = document.querySelector('.js-menu-container');
// const openMenuBtn = document.querySelector('.js-open-menu');
// const closeMenuBtn = document.querySelector('.js-close-menu');

// openMenuBtn.addEventListener('click', () => {
//   mobileMenu.classList.add('is-open');
//   const menu = document.querySelector('.mobile-menu__container');
//   bodyScrollLock.disableBodyScroll(menu);

//   closeMenuBtn.addEventListener('click', () => {
//     mobileMenu.classList.remove('is-open');
//     bodyScrollLock.enableBodyScroll(menu);
//   });
// });

// Мобільне меню
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const body = document.querySelector('body');
    const menu = document.querySelector('.mobile-menu__container');

    if (isMenuOpen) {
      // disableBodyScroll(body);
      enableBodyScroll(menu);
    } else {
      // enableBodyScroll(body);
      disableBodyScroll(menu);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1575px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
