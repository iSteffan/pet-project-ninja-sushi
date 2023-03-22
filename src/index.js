import { addDomSushiMarkup } from './js/generate-sushi-cards';
import {
  openModalLocation,
  closeModalLocation,
} from './js/modal-window-select-location';
import { checkMeditationTime } from './js/page-load-event';
import { loadMoreSushi } from './js/load-more-sushi';

const refs = {
  btnOpen: document.querySelector('.location-btn'), // Відкриваємо модалку з вибором мови/міста
  btnClose: document.querySelector('.location-modal-window__close-btn'), // Закриваємо модалку з вибором мови/міста
};

// Вставляємо згенеровану розмітку карток суші в DOM
addDomSushiMarkup();

// Відкриття/закриття модального вікна з вибором міста та мови
refs.btnOpen.addEventListener('click', openModalLocation);
refs.btnClose.addEventListener('click', closeModalLocation);

// Для мобільної версії: показуємо решту карток з суші по кліку на кнопку load more
loadMoreSushi();

document.addEventListener('DOMContentLoaded', firstStartHandle);

function firstStartHandle() {
  checkMeditationTime();
}
