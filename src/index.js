import { addDomSushiMarkup, selectHandle } from './js/generate-sushi-cards';
import { openModalLocation } from './js/modal-window-select-location';
import { checkMeditationTime } from './js/page-load-event';
import { loadMoreSushi } from './js/load-more-sushi';

const refs = {
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  formSushiFilter: document.getElementById('sort-sushi'),
};

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
