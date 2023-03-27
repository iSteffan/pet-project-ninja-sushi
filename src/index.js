import { addDomSushiMarkup, selectHandle } from './js/generate-sushi-cards';
import { openModalLocation } from './js/modal-window-select-location';
import { checkMeditationTime } from './js/page-load-event';
import { loadMoreSushi } from './js/load-more-sushi';
// import { sushi } from './js/sushi-object';
import { addToCart, openCart } from './js/add-to-cart-sushi';

const refs = {
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  formSushiFilter: document.getElementById('sort-sushi'),
  sushiContainer: document.querySelector('.section-sushi__container'),
  openCartBtn: document.querySelector('.cart-btn'),
  cart: document.querySelector('[data-modal="cart"]'),
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

// Відкриття модального вікна з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);

// Для мобільної версії: показуємо решту карток з суші по кліку на кнопку load more
loadMoreSushi();
