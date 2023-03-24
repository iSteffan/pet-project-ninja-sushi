import { addDomSushiMarkup, selectHandle } from './js/generate-sushi-cards';
import { openModalLocation } from './js/modal-window-select-location';
import { checkMeditationTime } from './js/page-load-event';
import { loadMoreSushi } from './js/load-more-sushi';

const refs = {
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  formSushiFilter: document.getElementById('sort-sushi'),
  sushiContainer: document.querySelector('.section-sushi__container'),
  addToCartBtn: document.querySelectorAll('.product-add-to-cart-btn'),
  btnCartText: document.querySelectorAll('.btn-cart-text'),
};

let nameArr = [];

refs.sushiContainer.addEventListener('click', e => {
  const button = e.target.closest('.product-add-to-cart-btn');
  if (button) {
    const nameElement = button.closest('.product-card').querySelector('.product-name');
    const addToCartText = button.closest('.product-card').querySelector('.btn-cart-text');
    const addToCartIcon = button
      .closest('.product-card')
      .querySelector('.add-to-cart-icon');

    const name = nameElement.textContent;
    const index = nameArr.indexOf(name);

    if (index === -1) {
      nameArr.push(name);
      button.style.backgroundColor = '#ccf5d5';
      addToCartText.style.display = 'block';
      addToCartIcon.style.display = 'none';
    } else {
      nameArr.splice(index, 1);
      button.style.backgroundColor = '#f5f5f7';
      addToCartText.style.display = 'none';
      addToCartIcon.style.display = 'block';
    }
    localStorage.setItem('order', JSON.stringify(nameArr));
    console.log('nameArr:', nameArr);
    // console.log('arr:', nameArr);
  }
});

// Події при завантаженні сторінки
document.addEventListener('DOMContentLoaded', firstStartHandle);

function firstStartHandle() {
  checkMeditationTime();
}

// Вставляємо згенеровану розмітку карток суші в DOM
addDomSushiMarkup();

// Фільтр суші
refs.formSushiFilter.addEventListener('change', selectHandle);

// Відкриття модального вікна з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);

// Для мобільної версії: показуємо решту карток з суші по кліку на кнопку load more
loadMoreSushi();
