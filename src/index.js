import { sushiMarkup } from './js/generate-sushi-cards';
import {
  selectLanguage,
  selectCity,
  onChangeLanguageClick,
  onChangeCityClick,
} from './js/modal-window-select-location';

// import { hideSushiCard } from './js/load-more-sushi';

const refs = {
  sushiCardContainer: document.querySelector('.section-sushi__container'), // Вставляємо згенеровану розмітку карток суші в DOM
  loadMoreButton: document.querySelector('.load-more-btn-sushi'),
  productCards: document.querySelectorAll('.product-card'),
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  btnClose: document.querySelector('.location-modal-window__close-btn'), // Закриваємо модалку з вибором мови/міста
  modal: document.querySelector('[data-modal="location"]'), // Модалка з вибором мови/міста
  selectLanguage: document.querySelector('.location-modal__language'), // Кнопка з вибором мови
  selectCity: document.querySelector('.location-modal__city'), // Кнопка з вибором міста
  setCity: document.querySelector('.location-btn__city'), // Встановлення міста
  setLanguage: document.querySelector('.location-btn__language'), // Встановлення мови
};

// Вставляємо згенеровану розмітку карток суші в DOM
refs.sushiCardContainer.insertAdjacentHTML('afterbegin', sushiMarkup);

// Відкриття/закриття модального вікна з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);
refs.btnClose.addEventListener('click', closeModalLocation);

function openModalLocation() {
  refs.modal.classList.remove('is-hidden');
}
function closeModalLocation() {
  refs.modal.classList.add('is-hidden');
}

//  Змінюємо місто і мову у хедері при натисканні на кнопки у модальному вікні
refs.selectLanguage.addEventListener('click', onChangeLanguageClick);
refs.selectCity.addEventListener('click', onChangeCityClick);

//Змінюємо фон вибраної кнопки у модальному вікні
selectLanguage();
selectCity();

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
