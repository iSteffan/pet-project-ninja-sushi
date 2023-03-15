import { sushi } from './js/sushi-object';
import { sushiMarkup } from './js/generate-sushi-cards';

console.log(sushi);

const refs = {
  sectionSushi: document.querySelector('.section-sushi__container'),
};

refs.sectionSushi.insertAdjacentHTML('afterbegin', sushiMarkup);

const hit = document.querySelector('.additional-info__hit');
const newW = document.querySelector('.additional-info__new');

console.log(hit);

// function checkEmptyField() {
//     if (hit.value === "") {

//     }
// }
