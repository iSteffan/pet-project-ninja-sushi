import { addDomSushiMarkup, selectHandle } from './js/generate-sushi-cards';
import { addDomRollMarkup, selectRollHandle } from './js/generate-roll-cards';
import { openModalLocation } from './js/modal-window-select-location';
import { checkMeditationTime } from './js/page-load-event';
import { loadMoreSushi } from './js/load-more-sushi';
// import { sushi } from './js/sushi-object';
import { addToCart, openCart } from './js/desktop-cart';
import { openMobileCart } from './js/mobile-cart';
import { mobileMenu } from './js/mobile-menu';
import '@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

// const bodyScrollLock = require('body-scroll-lock');
// const disableBodyScroll = bodyScrollLock.disableBodyScroll;
// const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const refs = {
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  formSushiFilter: document.getElementById('sort-sushi'),
  formRollFilter: document.getElementById('sort-roll'),
  sushiContainer: document.querySelector('.section-sushi__container'), // Контейнер куди рендеряться суші
  openCartBtn: document.querySelector('.cart-btn'),
  openMenuCartBtn: document.querySelector('.js-open-menu-cart'),
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

// Вставляємо згенеровану розмітку карток ролів в DOM
addDomRollMarkup();

// Фільтр суші
refs.formSushiFilter.addEventListener('change', selectHandle);

// Фільтр ролів
refs.formRollFilter.addEventListener('change', selectRollHandle);

// Додавання товару в корзину
refs.sushiContainer.addEventListener('click', addToCart);

// Відкриття корзини
refs.openCartBtn.addEventListener('click', openCart);

// Відкриття модального вікна з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);

// Для мобільної версії: показуємо решту карток з суші по кліку на кнопку load more
loadMoreSushi();

// Мобільне меню
mobileMenu();

// Мобільна корзина
refs.openMenuCartBtn.addEventListener('click', openMobileCart);

// Слайдер мобільної секції категорії
new Splide('.splide', {
  type: 'loop',
  perPage: 6,
  speed: 5000,
}).mount();
