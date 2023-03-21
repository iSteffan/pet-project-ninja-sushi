import { sushiMarkup } from './js/generate-sushi-cards';
import {
  onChangeLanguageClick,
  onChangeCityClick,
  openModalLocation,
  closeModalLocation,
} from './js/modal-window-select-location';

// import { hideSushiCard } from './js/load-more-sushi';

const refs = {
  sushiCardContainer: document.querySelector('.section-sushi__container'), // Вставляємо згенеровану розмітку карток суші в DOM
  loadMoreButton: document.querySelector('.load-more-btn-sushi'),
  productCards: document.querySelectorAll('.product-card'),
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  btnClose: document.querySelector('.location-modal-window__close-btn'), // Закриваємо модалку з вибором мови/міста
  selectLanguage: document.querySelector('.location-modal__language'), // Кнопка з вибором мови
  selectCity: document.querySelector('.location-modal__city'), // Кнопка з вибором міста
};

// Вставляємо згенеровану розмітку карток суші в DOM
refs.sushiCardContainer.insertAdjacentHTML('afterbegin', sushiMarkup);

// Відкриття/закриття модального вікна з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);
refs.btnClose.addEventListener('click', closeModalLocation);

const loadMoreButton = document.querySelector('.load-more-btn-sushi');
const productCards = document.querySelectorAll('.product-card');

// За замовчуванням приховуємо останні чотири картки товару
function hideSushiCard() {
  for (let i = productCards.length - 1; i > productCards.length - 5; i--) {
    productCards[i].classList.add('product-card--hide');
  }
}
hideSushiCard();

loadMoreButton.addEventListener('click', loadMoreSushiClick);

function loadMoreSushiClick() {
  for (let i = productCards.length - 1; i > productCards.length - 5; i--) {
    productCards[i].classList.remove('product-card--hide');
  }
  loadMoreButton.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', firstStartHandle);

function firstStartHandle() {}
