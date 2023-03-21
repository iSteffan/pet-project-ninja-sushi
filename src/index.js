import { sushiMarkup } from './js/generate-sushi-cards';
import {
  selectLanguage,
  selectCity,
  onChangeLanguageClick,
  onChangeCityClick,
} from './js/modal-window-select-location';

const refs = {
  sushiCardContainer: document.querySelector('.section-sushi__container'), // Вставляємо згенеровану розмітку карток суші в DOM
  // loadSushiBtn: document.querySelector('.load-more-btn-sushi'),
  // productCard: document.querySelector('.product-card'),
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

// Модальне вікно з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);
refs.btnClose.addEventListener('click', closeModalLocation);

function openModalLocation() {
  refs.modal.classList.remove('is-hidden');
}
function closeModalLocation() {
  refs.modal.classList.add('is-hidden');
}

//  Змінюємо місто і мову
refs.selectLanguage.addEventListener('click', onChangeLanguageClick);
refs.selectCity.addEventListener('click', onChangeCityClick);

//
selectLanguage();
selectCity();
// refs.loadSushiBtn.addEventListener('click', onLoadMoreSushiClick);

// function onLoadMoreSushiClick(e) {
//   // const productCard = document.querySelector('.additional-info__new');
//   // // productCard.style.display = block;
//   // productCard.style.backgroundColor = 'teal';
//   console.log(productCard);
// }
